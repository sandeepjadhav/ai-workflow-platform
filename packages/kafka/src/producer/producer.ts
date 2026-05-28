import {
  Kafka,
} from "kafkajs";

import { serialize }
  from "../utils/serializer";

const kafka = new Kafka({

  clientId:
    "ai-platform",

  brokers: [
    "localhost:9092",
  ],
});

export const producer =
  kafka.producer();

let connected = false;

export async function connectProducer() {

  if (connected) {
    return;
  }

  await producer.connect();

  connected = true;

  console.log(
    "Kafka Producer Connected",
  );
}

export async function publishEvent<T>(

  topic: string,

  payload: T,
) {

  if (!connected) {

    await connectProducer();
  }

  await producer.send({

    topic,

    messages: [

      {
        value:
          serialize(payload),
      },
    ],
  });

  console.log(
    `Event Published → ${topic}`,
  );
}