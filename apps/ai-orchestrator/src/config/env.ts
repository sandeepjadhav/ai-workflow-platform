import dotenv from "dotenv";

dotenv.config();

export const env = {

  geminiApiKey:
    process.env.GEMINI_API_KEY!,

  deepseekApiKey:
    process.env.DEEPSEEK_API_KEY!,

  aiProvider:
    process.env.AI_PROVIDER ||
    "ollama",
  ollamaModel:
    process.env.OLLAMA_MODEL ||
    "gemma:2b",
  ollamaBaseUrl:
    process.env.OLLAMA_BASE_URL ||
    "http://localhost:11434",
};