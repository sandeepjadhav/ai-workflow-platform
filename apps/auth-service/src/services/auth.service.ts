import bcrypt from "bcryptjs";
import { prisma }
  from "@repo/database";
import { ApiError }
  from "../utils/api-error";
import {
  publishEvent,
  TOPICS,
} from "@repo/kafka";

import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt";

export class AuthService {

  async signup(data: any) {

    const existingUser =
      await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

    if (existingUser) {

      throw new ApiError(
        400,
        "User already exists",
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        data.password,
        10,
      );

    const user =
      await prisma.user.create({

        data: {
          email: data.email,

          password:
            hashedPassword,

          name: data.name,
        },
      });

    await publishEvent(
      TOPICS.USER_CREATED,

      {
        userId: user.id,

        email: user.email,
      },
    );

    return this.generateTokens(user);
  }

  async login(data: any) {

    const user =
      await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

    if (!user) {

      throw new Error(
        "Invalid credentials",
      );
    }

    const valid =
      await bcrypt.compare(
        data.password,
        user.password,
      );

    if (!valid) {

      throw new Error(
        "Invalid credentials",
      );
    }

    await publishEvent(
      TOPICS.USER_LOGGED_IN,

      {
        userId: user.id,
      },
    );

    return this.generateTokens(user);
  }

  async generateTokens(user: any) {

    const accessToken =
      generateAccessToken({

        userId: user.id,

        email: user.email,
      });

    const refreshToken =
      generateRefreshToken({

        userId: user.id,
      });

    await prisma.user.update({

      where: {
        id: user.id,
      },

      data: {
        refreshToken,
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}