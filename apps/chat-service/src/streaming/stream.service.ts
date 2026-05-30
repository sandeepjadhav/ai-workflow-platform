import { prisma } from "@repo/database";
import { AIService } from "../../../ai-orchestrator/src/ai/ai.service";

const aiService =
  new AIService();

export class StreamService {

  async streamChat(

    conversationId: string,

    prompt: string,

    onToken: (
      token: string,
    ) => void,
  ) {
    console.log(
      "StreamService:streamChat called with conversationId:",
      conversationId,
      "and prompt:",
      prompt,
    );
    let fullResponse = "";

    const stream =
      await aiService
        .streamResponse(
          prompt,
        );

    for await (
      const token
      of stream
    ) {

      fullResponse += token;

      onToken(token);
    }

    await prisma.message.create({

      data: {

        conversationId,

        role: "assistant",

        content:
          fullResponse,
      },
    });
  }
}