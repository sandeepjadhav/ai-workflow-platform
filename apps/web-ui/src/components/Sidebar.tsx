import {
  BookOpen,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";

import {
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  useConversation,
} from "../context/ConversationContext";

export function Sidebar() {

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const {

    conversations,

    selectedConversationId,

    selectConversation,

    newChat,

  } = useConversation();

  const email =
    localStorage.getItem(
      "email",
    ) || "User";

  return (

    <aside
      className="
        w-72
        border-r
        bg-white
        flex
        flex-col
      "
    >

      <div
        className="
          border-b
          p-4
        "
      >

        <div className="font-semibold">
          {email}
        </div>

      </div>

      <div className="p-4">

        <button

          onClick={() => {

            newChat();

            navigate("/chat");

          }}

          className="
            flex
            w-full
            items-center
            gap-2
            rounded-lg
            bg-blue-600
            px-4
            py-3
            text-white
          "
        >

          <Plus size={18}/>

          New Chat

        </button>

      </div>

      <div className="px-3">

        <button
          onClick={() =>
            navigate("/chat")
          }
          className="flex w-full gap-2 rounded-lg p-3"
        >
          <MessageSquare size={18}/>
          Chats
        </button>

        <button
          onClick={() =>
            navigate("/knowledge")
          }
          className="flex w-full gap-2 rounded-lg p-3"
        >
          <BookOpen size={18}/>
          Knowledge Base
        </button>

        <button
          onClick={() =>
            navigate("/settings")
          }
          className="flex w-full gap-2 rounded-lg p-3"
        >
          <Settings size={18}/>
          Settings
        </button>

      </div>

      <div className="mt-4 border-t"/>

      <div
        className="
          flex-1
          overflow-y-auto
        "
      >

        {conversations.map(
          conversation => (

            <button

              key={
                conversation.id
              }

              onClick={() => {

                selectConversation(
                  conversation.id,
                );

                navigate(
                  "/chat",
                );
              }}

              className={`
                w-full
                border-b
                px-4
                py-3
                text-left

                ${
                  selectedConversationId ===
                  conversation.id

                    ? "bg-blue-50"

                    : ""
                }
              `}
            >

              <div
                className="
                  truncate
                  text-sm
                "
              >
                {
                  conversation.title
                }
              </div>

            </button>

          ),
        )}

      </div>

    </aside>

  );
}