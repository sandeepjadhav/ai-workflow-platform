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
  console.log("Signup request received with body:", req.body);
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
  console.log("login request received with body:", req.body);

  const result =
    await authService.login(
      req.body,
    );

  return res.json(result);
}