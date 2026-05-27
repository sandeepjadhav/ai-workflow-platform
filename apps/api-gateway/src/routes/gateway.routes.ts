import { Router }
  from "express";

import {
  createProxyMiddleware,
} from "http-proxy-middleware";

import { env }
  from "../config/env";

const router = Router();

router.use(

  "/auth",

  createProxyMiddleware({

    target:
      env.authServiceUrl,

    changeOrigin: true,

    pathRewrite: {
      "^/auth": "/auth",
    }
  }),
);

export default router;