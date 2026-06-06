import {
  useState,
} from "react";

export function SettingsPage() {

  const [
    provider,
    setProvider,
  ] = useState(

    localStorage.getItem(
      "provider",
    ) || "ollama",
  );

  function saveProvider(
    value: string,
  ) {

    setProvider(
      value,
    );

    localStorage.setItem(
      "provider",
      value,
    );
  }

  return (

    <div
      className="
        h-full
        p-8
      "
    >

      <h1
        className="
          mb-6
          text-3xl
          font-bold
        "
      >
        Settings
      </h1>

      <div
        className="
          rounded-xl
          bg-white
          p-6
          shadow
        "
      >

        <h2
          className="
            mb-4
            text-xl
            font-semibold
          "
        >
          AI Provider
        </h2>

        <select

          value={
            provider
          }

          onChange={
            e =>
              saveProvider(
                e.target.value,
              )
          }

          className="
            rounded-lg
            border
            p-3
          "
        >

          <option
            value="ollama"
          >
            Ollama
          </option>

          <option
            value="gemini"
          >
            Gemini
          </option>

          <option
            value="deepseek"
          >
            DeepSeek
          </option>

        </select>

      </div>

    </div>
  );
}