import { Request, Response }
  from "express";

import crypto from "crypto";

import { prisma }
  from "@repo/database";

import { IngestionService }
  from "../services/ingestion.service";

const ingestionService =
  new IngestionService();

export async function uploadDocument(
  req: Request,
  res: Response,
) {

  try {

    const file = req.file;

    if (!file) {

      return res.status(400).json({
        message: "File required",
      });
    }

    const text =
      file.buffer.toString();

    const documentId =
      crypto.randomUUID();

    await prisma.document.create({

      data: {

        id: documentId,

        userId: "TEMP_USER",

        name: file.originalname,

        status: "PROCESSED",
      },
    });

    await ingestionService
      .ingestDocument(
        text,
        documentId,
      );

    return res.json({

      documentId,

      status: "processed",
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      message: "Upload failed",
    });
  }
}