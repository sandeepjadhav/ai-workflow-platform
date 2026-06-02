
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
  // Below code for testing to avoid kafka consumer as we have limited data
//   const payload = {
//     messageId:"c6cd19c4-c06c-4d18-a987-16a29a9aea6d",
//     "conversationId":"75f402d4-cc2f-40f3-bf7c-0e2e26dbea09",
//     "content":"Who is the Prime Minister of India?",
//     userId:"TEST_USER",
//   }
//    const aiResponse =
//         await aiService
//           .generateResponse(
//             payload.content,
//           );
// console.log(
//         "Generated AI Response:",
//         aiResponse,
//       );
//       await responseService
//         .saveAssistantMessage(

//           payload.conversationId,

//           aiResponse,
//         );

//       console.log(
//         "AI Response Saved",
//       );

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
console.log(
        "Generated AI Response:",
        aiResponse,
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