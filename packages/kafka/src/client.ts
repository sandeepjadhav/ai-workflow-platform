import { Kafka }
  from "kafkajs";

import { env }
  from "./env";

export const kafka =
  new Kafka({

    clientId:
      "ai-workflow-platform",

    brokers: [
      env.kafkaBrokers,
    ],
  });