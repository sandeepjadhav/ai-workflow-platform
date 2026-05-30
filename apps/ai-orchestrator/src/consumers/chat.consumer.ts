
import {
  consumeEvent, TOPICS
} from "@repo/kafka";

import { AIService }
  from "../ai/ai.service";

import {
  ResponseService,
} from "../services/response.service";

const aiService =
  new AIService();

const responseService =
  new ResponseService();

interface ChatMessageCreatedEvent {

  messageId: string;

  conversationId: string;

  userId: string;

  content: string;
}

export async function startChatConsumer() {

  await consumeEvent<ChatMessageCreatedEvent>(

    "ai-orchestrator-group",

    TOPICS.CHAT_MESSAGE_CREATED,

    async (payload) => {

      console.log(
        "Received Chat Message Created Event:",
        payload,
      );

      const aiResponse =
        await aiService
          .generateResponse(
            payload.content,
          );

      await responseService
        .saveAssistantMessage(

          payload.conversationId,

          aiResponse,
        );

      console.log(
        "AI Response Saved",
      );
    },
  );
}