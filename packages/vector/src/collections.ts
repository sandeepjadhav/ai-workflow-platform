import { qdrant }
from "./client";

export async function createKnowledgeCollection() {

  const exists =
    await qdrant.collectionExists(
      "knowledge_v3"
    );

  if (exists.exists) {
    return;
  }
  // await qdrant.deleteCollection("knowledge");
  await qdrant.createCollection(
    "knowledge_v3",
    {
      vectors: {
        size: 1024,
        distance: "Cosine",
      },
    }
  );

  console.log(
    "Knowledge collection created"
  );
}