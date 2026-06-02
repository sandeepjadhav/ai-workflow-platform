import dotenv from "dotenv";

dotenv.config();

import { QdrantClient }
  from "@qdrant/js-client-rest";

export const qdrant =
  new QdrantClient({
    url:
      process.env.QDRANT_URL ||
      "https://a9152028-0b33-4cbb-8ff9-e2ec7952a426.us-east-2-0.aws.cloud.qdrant.io",
      apiKey: process.env.QDRANT_API_KEY || ""
  });