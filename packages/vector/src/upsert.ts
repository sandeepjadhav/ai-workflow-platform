import { qdrant }
from "./client";

export async function upsertDocument(

  id: string,

  vector: number[],

  payload: Record<string, any>,
) {

  await qdrant.upsert(

    "knowledge_v3",

    {

      wait: true,

      points: [

        {
          id,

          vector,

          payload,
        },
      ],
    },
  );
}