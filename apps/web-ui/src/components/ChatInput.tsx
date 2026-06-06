import {
  useState,
} from "react";

import {
  Send,
} from "lucide-react";

interface Props {
  onSend: (
    value: string,
  ) => void;
}

export function ChatInput({
  onSend,
}: Props) {

  const [
    value,
    setValue,
  ] = useState("");

  const handleSend =
    () => {

      if (!value.trim()) {
        return;
      }

      onSend(value);

      setValue("");
    };

  return (
    <div className="flex gap-2 border-t p-4">

      <input
        className="flex-1 rounded-lg border px-4 py-3"
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value,
          )
        }
        placeholder="Ask anything..."
      />

      <button
        onClick={handleSend}
        className="rounded-lg bg-blue-600 px-4 text-white"
      >
        <Send size={18} />
      </button>

    </div>
  );
}