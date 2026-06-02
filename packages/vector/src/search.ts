import { qdrant } from "./client";

export async function searchDocuments(
  vector: number[],
  limit = 5,
) {

  const results =
    await qdrant.search(
      "knowledge_v3",
      {
        vector,
        limit,
        with_payload: true,
      },
    );

  console.log(
    results.map(r => ({
      score: r.score,
      content:
        r.payload?.content
          ?.substring(0, 80),
    })),
  );

  return results;
}