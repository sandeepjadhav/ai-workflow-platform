import { Router }
  from "express";

import {
  authMiddleware,
} from "../middlewares/auth.middleware";

import {
  streamChat,
} from "./stream.controller";

const router = Router();

router.post(
  "/",

  authMiddleware,

  streamChat,
);

export default router;