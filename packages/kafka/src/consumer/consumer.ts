import {
  Kafka,
} from "kafkajs";
import {env } from "../env";
import {
  deserialize,
} from "../utils/serializer";

// const kafka = new Kafka({
//   clientId:
//     "ai-platform",
//   brokers: [
//     "localhost:9092",
//   ],
// });

const redpanda = new Kafka({
  brokers: ["d8cl1phjqgbv1u6eu12g.any.ap-south-1.mpx.prd.cloud.redpanda.com:9092"],
  ssl: {},
  sasl: {
    mechanism: "scram-sha-512",
    username: env.kafkaConsumerUsername,
    password: env.kafkaConsumerPassword
  }
})

export async function consumeEvent<T>(

  groupId: string,

  topic: string,

  handler: (
    payload: T,
  ) => Promise<void>,
) {

  // const consumer = kafka.consumer({ groupId, });
  const consumer = redpanda.consumer({ groupId })

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
            "                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Raw Message:",
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