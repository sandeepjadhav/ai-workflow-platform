import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  createConversation,
  getConversations,
} from "../api/chat.api";

import type {
  Conversation,
} from "../types/conversation";

interface ConversationContextType {

  conversations:
    Conversation[];

  selectedConversationId:
    string | null;

  refreshConversations:
    () => Promise<void>;

  selectConversation:
    (id: string) => void;

  newChat:
    () => void;

  createNewConversation:
    (
      title: string,
    ) => Promise<Conversation>;
}

const ConversationContext =
  createContext(
    {} as ConversationContextType,
  );

export function ConversationProvider({
  children,
}: {
  children:
    React.ReactNode;
}) {

  const [
    conversations,
    setConversations,
  ] = useState<
    Conversation[]
  >([]);

  const [
    selectedConversationId,
    setSelectedConversationId,
  ] = useState<
    string | null
  >(null);

  async function refreshConversations() {

    const data =
      await getConversations();

    setConversations(
      data,
    );
  }

  function selectConversation(
    id: string,
  ) {

    setSelectedConversationId(
      id,
    );
  }

  function newChat() {
    console.log("new chat");
    setSelectedConversationId(
      null,
    );
  }

  async function createNewConversation(
    title: string,
  ) {

    const conversation =
      await createConversation(
        {title},
      );

    await refreshConversations();

    setSelectedConversationId(
      conversation.id,
    );

    return conversation;
  }

  useEffect(() => {

    refreshConversations();

  }, []);

  return (

    <ConversationContext.Provider

      value={{

        conversations,

        selectedConversationId,

        refreshConversations,

        selectConversation,

        newChat,

        createNewConversation,

      }}

    >

      {children}

    </ConversationContext.Provider>

  );
}

export function useConversation() {

  return useContext(
    ConversationContext,
  );
}