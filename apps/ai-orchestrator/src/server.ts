import {
  startChatConsumer,
} from "./consumers/chat.consumer";

async function start() {
  await startChatConsumer();
  console.log(
    "AI Orchestrator running",
  );
}

start();