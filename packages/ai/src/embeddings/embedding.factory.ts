
import { generateEmbedding as generateOllamaEmbedding } from "./ollama.embedding";
import { generateEmbedding as generateGeminiEmbedding } from "./gemini.embedding";

export function getEmbeddingProvider() {

  switch (
    process.env.EMBEDDING_PROVIDER
  ) {

    case "ollama":
      return generateOllamaEmbedding;

    case "gemini":
      return generateGeminiEmbedding;

    default:
      return generateOllamaEmbedding;
  }
}