import { Router } from "express";
import { signup, login, } from "../controllers/auth.controller";
import { authMiddleware, } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { signupSchema, loginSchema, } from "../validations/auth.validation";
import { asyncHandler } from "../utils/async-handler";

const router = Router();

router.post(
  "/signup",

  validate(signupSchema),

  asyncHandler(signup),
);

router.post(
  "/login",

  validate(loginSchema),

  asyncHandler(login),
);

router.get(
  "/me",

  authMiddleware,

  (req: any, res) => {

    return res.json({
      user: req.user,
    });
  },
);

export default router;