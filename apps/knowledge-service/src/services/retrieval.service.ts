import {
  generateEmbedding,
} from "@repo/ai";

import {
  searchDocuments,
} from "@repo/vector";

export class RetrievalService {

  async retrieveContext(
    question: string,
  ): Promise<string> {

    const vector =
      await generateEmbedding(
        question,
      );

    const results =
      await searchDocuments(
        vector,
        3,
      );

    if (!results.length) {
      return "";
    }

    return results
      .map(
        result =>
          result.payload?.content,
      )
      .join("\n\n");
  }
}