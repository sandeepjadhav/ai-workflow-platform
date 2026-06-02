import { randomUUID } from "crypto";

import { generateEmbedding }
  from "@repo/ai";

import { upsertDocument } from "@repo/vector";

import { ChunkService }
  from "./chunk.service";

export class IngestionService {

  private chunkService =
    new ChunkService();

  async ingestDocument(
    text: string,
    documentId: string,
  ) {

    const chunks =
      this.chunkService.chunkText(text);
console.log(
  "Chunks generated:",
  chunks.length,
);

if (chunks.length > 10000) {

  throw new Error(
    "Too many chunks generated"
  );
}
    for (const chunk of chunks) {

      const vector =
        await generateEmbedding(chunk);

      await upsertDocument(

        randomUUID(),

        vector,

        {
           documentId,
          content: chunk
        },
      );
    }
  }
}