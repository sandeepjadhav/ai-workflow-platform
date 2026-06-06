import express from "express";

import cors from "cors";

import helmet from "helmet";

import documentRoutes
  from "./routes/document.routes";

import searchRoutes
  from "./routes/search.routes";

import retrievalRoutes
  from "./routes/retrieval.routes";

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.get(

  "/health",

  (req, res) => {

    return res.json({

      status: "ok",

      service:
        "knowledge-service",
    });
  },
);

app.use(
  "/documents",
  documentRoutes,
);

app.use(
  "/search",
  searchRoutes,
);

app.use(
  "/retrieve",
  retrievalRoutes,
);


export default app;