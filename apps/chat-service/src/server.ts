import app from "./app";
import { env } from "./config/env";
import { connectProducer, } from "@repo/kafka";

async function start() {

  await connectProducer();
  
  app.listen(
    env.port,
    () => {
      console.log(
        `Chat Service running on ${env.port}`,
      );
    },
  );
}

start();
