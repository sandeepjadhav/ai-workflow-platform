import { prisma }
  from "@repo/database";

export class ResponseService {

  async saveAssistantMessage(

    conversationId: string,

    content: string,
  ) {

    return prisma.message.create({

      data: {

        conversationId,

        role: "assistant",

        content,
      },
    });
  }
}