import { Response, } from "express";
import { AuthRequest, } from "../middlewares/auth.middleware";
import { ConversationService, } from "../services/conversation.service";

const conversationService = new ConversationService();

export async function createConversation(req: AuthRequest, res: Response,) {

  const conversation =
    await conversationService
      .createConversation(
        req.user.userId,
        req.body.title,
      );
  return res.json(
    conversation,
  );
}

export async function getConversations(req: AuthRequest, res: Response,) {

  const conversations =
    await conversationService
      .getUserConversations(
        req.user.userId,
      );

  return res.json(
    conversations,
  );
}
