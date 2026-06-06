import {
  useEffect,
  useRef,
  useState,
} from "react";



import { ChatInput }
  from "../components/ChatInput";

import { MessageBubble }
  from "../components/MessageBubble";



import { TypingIndicator }
  from "../components/TypingIndicator";

import {
  getConversations,
  getMessages,
  sendMessage,
} from "../api/chat.api";

import type {
  Message,
} from "../types/chat";

import type {
  Conversation,
} from "../types/conversation";
import { AppLayout } from "../layout/AppLayout";
import { useConversation } from "../context/ConversationContext";

export function ChatPage() {
  const { selectedConversationId, createNewConversation, } = useConversation();

  const [
    conversations,
    setConversations,
  ] = useState<
    Conversation[]
  >([]);

  const [
    messages,
    setMessages,
  ] = useState<
    Message[]
  >([]);

  const [
    conversationId,
    setConversationId,
  ] = useState<
    string | null
  >(null);

  const [
    isLoading,
    setIsLoading,
  ] = useState(false);

  const bottomRef =
    useRef<HTMLDivElement>(
      null,
    );

  useEffect(() => {

    loadConversations();

  }, []);

  useEffect(() => {

    bottomRef.current
      ?.scrollIntoView({
        behavior: "smooth",
      });

  }, [messages, isLoading]);

  async function loadConversations() {

    try {

      const data =
        await getConversations();

      setConversations(
        data,
      );

      if (
        data.length > 0 &&
        !conversationId
      ) {

        await selectConversation(
          data[0].id,
        );
      }

    } catch (error) {

      console.error(
        error,
      );
    }
  }

  async function loadMessages(
    conversationId: string,
  ) {

    try {

      const data =
        await getMessages(
          conversationId,
        );

      setMessages(
        data,
      );

    } catch (error) {

      console.error(
        error,
      );
    }
  }

  async function selectConversation(
    conversationId: string,
  ) {

    setConversationId(
      conversationId,
    );

    await loadMessages(
      conversationId,
    );
  }

 useEffect(() => {
  console.log("Selected conversation changed:", selectedConversationId);
  if (!selectedConversationId) {
    console.log("No conversation selected, clearing messages");
    setMessages([]);
    return;
  }

  loadMessages(
    selectedConversationId,
  );

}, [selectedConversationId]);

  async function handleSend(
    content: string,
  ) {

    try {

      let activeConversationId = selectedConversationId;

     if (!activeConversationId) {

  const conversation =
    await createNewConversation(
      content,
    );

  activeConversationId = conversation.id;
}

      setIsLoading(true);

      const existingCount =
        messages.length;

      await sendMessage(
        activeConversationId!,
        content,
      );

      await loadMessages(
        activeConversationId!,
      );

      const interval =
        setInterval(
          async () => {

            const data =
              await getMessages(
                activeConversationId!,
              );

            setMessages(
              data,
            );

            // AI response arrived
            if (
              data.length >
              existingCount + 1
            ) {

              clearInterval(
                interval,
              );

              setIsLoading(
                false,
              );
            }

          },
          1000,
        );

      setTimeout(
        () => {

          clearInterval(
            interval,
          );

          setIsLoading(
            false,
          );

        },
        15000,
      );

    } catch (error) {

      console.error(
        error,
      );

      setIsLoading(
        false,
      );
    }
  }

  const selectedConversation =
    conversations.find(
      conversation =>
        conversation.id ===
        conversationId,
    );

  return (

    <AppLayout>

      <div
        className="
          h-full
          flex
          flex-col
        "
      >

        <div
          className="
            flex-1
            overflow-y-auto
            p-6
          "
        >

          {messages.length === 0 ? (

            <div
              className="
                h-full
                flex
                items-center
                justify-center
                text-gray-400
              "
            >
              Start a new conversation
            </div>

          ) : (

            <>
              {messages.map(
                message => (

                  <MessageBubble
                    key={message.id}
                    message={message}
                  />

                ),
              )}

              {isLoading && (
                <TypingIndicator />
              )}

            </>

          )}

        </div>

        <ChatInput
          onSend={
            handleSend
          }
        />

      </div>

    </AppLayout>

  );
}