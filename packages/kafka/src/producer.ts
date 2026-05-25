import { kafka }
  from "./client";

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
          JSON.stringify(payload),
      },
    ],
  });

  console.log(
    `Event Published → ${topic}`,
  );
}