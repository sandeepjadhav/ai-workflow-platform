import { Router } from "express";

import { authMiddleware, } from "../middlewares/auth.middleware";

import { createMessage, getMessages, } from "../controllers/message.controller";

const router = Router();

router.post(
  "/",
  authMiddleware,
  createMessage,
);

router.get(
  "/:conversationId",
  authMiddleware,
  getMessages,
);

export default router;