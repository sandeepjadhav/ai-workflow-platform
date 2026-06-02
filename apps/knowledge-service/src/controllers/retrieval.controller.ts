import {
  Request,
  Response,
} from "express";

import {
  RetrievalService,
} from "../services/retrieval.service";

const retrievalService =
  new RetrievalService();

export async function retrieveContext(
  req: Request,
  res: Response,
) {

  const {
    question,
  } = req.body;

  const context =
    await retrievalService
      .retrieveContext(
        question,
      );

  return res.json({
    context,
  });
}