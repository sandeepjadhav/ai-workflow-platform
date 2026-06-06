import { Router }
  from "express";

import {
  retrieveContext,
} from "../controllers/retrieval.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  retrieveContext,
);

export default router;