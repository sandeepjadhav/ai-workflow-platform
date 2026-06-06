import { Router }
from "express";

import {
  searchKnowledge,
}
from "../controllers/search.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post(
  "/",
  authMiddleware,
  searchKnowledge,
);

export default router;