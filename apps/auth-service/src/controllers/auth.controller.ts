import {
  Request,
  Response,
} from "express";

import { AuthService }
  from "../services/auth.service";

const authService =
  new AuthService();

export async function signup(
  req: Request,
  res: Response,
) {

  const result =
    await authService.signup(
      req.body,
    );

  return res.json(result);
}

export async function login(
  req: Request,
  res: Response,
) {

  const result =
    await authService.login(
      req.body,
    );

  return res.json(result);
}