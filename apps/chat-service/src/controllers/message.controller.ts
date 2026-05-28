import { Response, } from "express";
import { AuthRequest, } from "../middlewares/auth.middleware";
import { MessageService, } from "../services/message.service";

const messageService = new MessageService();

export async function createMessage( req: AuthRequest, res: Response,) {

  const message =
    await messageService
      .createMessage(
        req.user.userId,
        req.body.conversationId,
        req.body.content,
      );

  return res.json(
    message,
  );
}

export async function getMessages( req: AuthRequest, res: Response, ) {

  const messages =
    await messageService
      .getConversationMessages(
        req.user.userId,
        req.params.conversationId,
      );

  return res.json(
    messages,
  );
}