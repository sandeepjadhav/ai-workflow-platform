import express from "express";

import cors from "cors";

import helmet from "helmet";

import authRoutes
  from "./routes/auth.routes";

import healthRoutes
  from "./routes/health.routes";

import {
  requestLogger,
} from "./middlewares/request-logger.middleware";

import {
  requestIdMiddleware,
} from "./middlewares/request-id.middleware";

import {
  errorMiddleware,
} from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(requestIdMiddleware);

app.use(requestLogger);

app.use(
  "/auth",
  authRoutes,
);

app.use(
  "/health",
  healthRoutes,
);

app.use(errorMiddleware);

export default app;