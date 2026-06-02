import {
  generateEmbedding,
} from "@repo/ai";

import {
  searchDocuments,
} from "@repo/vector";

export class SearchService {

  async search(
    query: string,
  ) {

    const vector =
      await generateEmbedding(
        query,
      );
    console.log(
      "Query:",
      query,
    );

    console.log(
      "Vector Length:",
      vector.length,
    );

    console.log(
      "First 5 values:",
      vector.slice(0, 5),
    );
    const results =
      await searchDocuments(
        vector,
        5,
      );

    return results;
  }
}