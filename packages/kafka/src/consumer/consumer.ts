import {
  Kafka,
} from "kafkajs";

import {
  deserialize,
} from "../utils/serializer";

const kafka = new Kafka({

  clientId:
    "ai-platform",

  brokers: [
    "localhost:9092",
  ],
});

export async function consumeEvent<T>(

  groupId: string,

  topic: string,

  handler: (
    payload: T,
  ) => Promise<void>,
) {

  const consumer =
    kafka.consumer({
      groupId,
    });

  await consumer.connect();

  console.log(
    "Kafka Consumer Connected",
  );

  await consumer.subscribe({

    topic,

    fromBeginning: true,
  });

  await consumer.run({

    eachMessage:
      async ({ message }) => {

        if (!message.value) {
          return;
        }

        try {
          console.log(
            "Received Raw Message:",
            message,
          );
          console.log(
            "Received Raw Message:",
            message.value.toString(),
          );
          const payload =
            deserialize<T>(
              message.value,
            );

          await handler(
            payload,
          );

        } catch (error) {

          console.error(
            "Consumer Error:",
            error,
          );
        }
      },
  });
}