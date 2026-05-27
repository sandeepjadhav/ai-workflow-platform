import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT || 8080,
    authServiceUrl: process.env.AUTH_SERVICE_URL,
    jwtSecret: process.env.JWT_SECRET!,
};
