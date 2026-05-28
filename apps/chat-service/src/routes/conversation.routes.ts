import { Router } from "express";
import { authMiddleware, } from "../middlewares/auth.middleware";

import { createConversation, getConversations, } from "../controllers/conversation.controller";

const router = Router();

router.post(
  "/",
  authMiddleware,
  createConversation,
);

router.get(
  "/",
  authMiddleware,
  getConversations,
);

export default router;