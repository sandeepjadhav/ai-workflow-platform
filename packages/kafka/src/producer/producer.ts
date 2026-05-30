import {
  CompressionTypes,
  Kafka,
} from "kafkajs";
import { env } from "../env";
import { serialize }
  from "../utils/serializer";
// const kafka = new Kafka({
//   clientId:
//     "ai-platform",
//   brokers: [
//     "localhost:9092",
//   ],
// });
// export const producer =
//   kafka.producer();

const redpanda = new Kafka({
  brokers: ["d8cl1phjqgbv1u6eu12g.any.ap-south-1.mpx.prd.cloud.redpanda.com:9092"],
  ssl: {},
  sasl: {
    mechanism: "scram-sha-512",
    username: env.kafkaProducerUsername,
    password: env.kafkaProducerPassword
  }
})
export const producer = redpanda.producer();


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
    compression: CompressionTypes.GZIP,
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