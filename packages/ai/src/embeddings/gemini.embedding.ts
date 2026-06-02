import { GoogleGenAI }
from "@google/genai";

const ai =
  new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
  });

export async function generateEmbedding(
  text: string,
) {

  const result =
    await ai.models.embedContent({

      model:
        process.env.EMBEDDING_MODEL || "text-embedding-004",

      contents:
        text,
    });

  return result.embeddings?.[0]?.values ?? [];
}
