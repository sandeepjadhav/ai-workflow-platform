import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";

import { env }
  from "../config/env";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {

  const authHeader =
    req.headers.authorization;

  if (!authHeader) {

    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token =
    authHeader.split(" ")[1];

  try {

    jwt.verify(
      token,
      env.jwtSecret,
    );

    next();

  } catch {

    return res.status(401).json({
      message:
        "Invalid token",
    });
  }
}