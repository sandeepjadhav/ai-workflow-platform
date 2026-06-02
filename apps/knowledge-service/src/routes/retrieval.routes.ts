import { Router }
  from "express";

import {
  retrieveContext,
} from "../controllers/retrieval.controller";

const router = Router();

router.post(
  "/",
  retrieveContext,
);

export default router;