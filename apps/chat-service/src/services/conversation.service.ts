import { prisma } from "@repo/database";

export class ConversationService {
  async createConversation(
    userId: string,
    title?: string,
  ) {
    return prisma.conversation.create({
      data: {
        userId,
        title,
      },
    });
  }

  async getUserConversations(userId: string) {
    return prisma.conversation.findMany({
      where: {
        userId,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
}