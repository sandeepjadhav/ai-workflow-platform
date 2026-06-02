import {
  Request,
  Response,
} from "express";

import {
  SearchService,
} from "../services/search.service";

const searchService =
  new SearchService();

export async function searchKnowledge(
  req: Request,
  res: Response,
) {

  const {
    query,
  } = req.body;

  const results =
    await searchService.search(
      query,
    );

  return res.json(results);
}
