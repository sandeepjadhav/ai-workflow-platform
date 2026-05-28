import { prisma } from "@repo/database";

import {
  publishEvent,
  TOPICS,
} from "@repo/kafka";


export class MessageService {

  async createMessage(
    userId: string,
    conversationId: string,
    content: string,
  ) {

    const conversation =
      await prisma.conversation
        .findFirst({
          where: {
            id: conversationId,
            userId,
          },
        });

    if (!conversation) {
      throw new Error(
        "Conversation not found",
      );
    }

    const message =
      await prisma.message.create({
        data: {
          conversationId,
          role: "user",
          content,
        },
      });

    await publishEvent(
      TOPICS.CHAT_MESSAGE_CREATED,
      {
        messageId:
          message.id,
        conversationId,
        userId,
        content,
      },
    );
    return message;
  }

  async getConversationMessages(
    userId: string,
    conversationId: string,
  ) {

    const conversation =
      await prisma.conversation
        .findFirst({
          where: {
            id: conversationId,
            userId,
          },
        });

    if (!conversation) {
      throw new Error(
        "Conversation not found",
      );
    }

    return prisma.message.findMany({
      where: {
        conversationId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }
}