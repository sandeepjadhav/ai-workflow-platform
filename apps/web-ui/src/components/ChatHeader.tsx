import {
  Download,
  Share2,
} from "lucide-react";

export function ChatHeader() {

  return (

    <div
      className="
        h-16
        bg-white
        border-b
        px-6
        flex
        items-center
        justify-between
      "
    >

      <div>

        <select
          className="
            rounded-lg
            border
            px-3
            py-2
          "
        >

          <option>
            Ollama
          </option>

          <option>
            Gemini
          </option>

          <option>
            DeepSeek
          </option>

        </select>

      </div>

      <div className="flex gap-3">

        <button
          className="
            rounded-lg
            border
            p-2
          "
        >
          <Download
            size={18}
          />
        </button>

        <button
          className="
            rounded-lg
            border
            p-2
          "
        >
          <Share2
            size={18}
          />
        </button>

      </div>

    </div>
  );
}