import dotenv from "dotenv";

dotenv.config();

export const env = {

  geminiApiKey:
    process.env.GEMINI_API_KEY!,

  deepseekApiKey:
    process.env.DEEPSEEK_API_KEY!,

  aiProvider:
    process.env.AI_PROVIDER ||
    "gemini",
};