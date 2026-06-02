import {
  generateEmbedding,
}
from "./embeddings/ollama.embedding";

async function run() {

  const vector =
    await generateEmbedding(
      "Kafka is a distributed event streaming platform"
    );

  console.log(
    vector.length
  );
}

run();
