import jwt from "jsonwebtoken";

import { env }
    from "../config/env";

export function generateAccessToken(
    payload: any,
) {

    return jwt.sign(
        payload,
        env.jwtSecret,
        {
            expiresIn: "15m",
        },
    );
}

export function generateRefreshToken(
    payload: any,
) {

    return jwt.sign(
        payload,
        env.jwtRefreshSecret,
        {
            expiresIn: "7d",
        },
    );
}