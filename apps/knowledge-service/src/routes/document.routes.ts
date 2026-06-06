import { Router }
  from "express";

import multer from "multer";

import {
  getDocuments,
  uploadDocument,
  deleteDocument
} from "../controllers/document.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

const upload = multer({

  storage:
    multer.memoryStorage(),
});

router.post(

  "/upload",
  authMiddleware,
  upload.single("file"),

  uploadDocument,
);

router.get(
  "/",
  authMiddleware,
  getDocuments,
);

router.delete(
  "/:id",
  authMiddleware,
  deleteDocument,
);


export default router;