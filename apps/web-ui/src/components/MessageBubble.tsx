import type {
  Message,
} from "../types/chat";

interface Props {
  message: Message;
}

export function MessageBubble({
  message,
}: Props) {

  const isUser =
    message.role === "user";

  return (

    <div
      className={`
        flex
        mb-5

        ${
          isUser
            ? "justify-end"
            : "justify-start"
        }
      `}
    >

      <div
        className={`
          max-w-[75%]
          rounded-2xl
          px-5
          py-3
          shadow-sm

          ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-white border"
          }
        `}
      >

        <div
          className="
            whitespace-pre-wrap
            leading-7
          "
        >
          {message.content}
        </div>

      </div>

    </div>

  );
}