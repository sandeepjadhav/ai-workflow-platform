import express from "express";

import cors from "cors";

import helmet from "helmet";

import gatewayRoutes
  from "./routes/gateway.routes";

import {
  requestIdMiddleware,
} from "./middlewares/request-id.middleware";

import {
  requestLogger,
} from "./middlewares/request-logger.middleware";

const app = express();

app.use(cors());

app.use(helmet());

app.use(requestIdMiddleware);

app.use(requestLogger);

app.use("/api", gatewayRoutes);

app.get(
  "/health",

  (req, res) => {

    return res.json({

      status: "ok",

      service:
        "api-gateway",
    });
  },
);

export default app;