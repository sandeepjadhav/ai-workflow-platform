import { Router }
from "express";

import {
  searchKnowledge,
}
from "../controllers/search.controller";

const router = Router();

router.post(
  "/",
  searchKnowledge,
);

export default router;