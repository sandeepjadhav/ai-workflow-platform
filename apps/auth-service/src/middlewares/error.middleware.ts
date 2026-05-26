import {
  Request,
  Response,
  NextFunction,
} from "express";

import { ApiError }
  from "../utils/api-error";

import { logger }
  from "@repo/logger";

export function errorMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) {

  logger.error({

    message: err.message,

    stack: err.stack,

    requestId:
      req.headers["x-request-id"],
  });

  if (err instanceof ApiError) {

    return res.status(
      err.statusCode,
    ).json({

      message: err.message,
    });
  }

  return res.status(500).json({

    message:
      "Internal Server Error",
  });
}