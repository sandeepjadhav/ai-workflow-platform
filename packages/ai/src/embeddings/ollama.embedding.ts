import ollama from "ollama";

export async function generateEmbedding(
  text: string,
): Promise<number[]> {

  const response =
    await ollama.embeddings({
      model: process.env.EMBEDDING_MODEL || "mxbai-embed-large",
      prompt: text,
    });

  return response.embedding;
}