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

router.use(
  "/chat",
  createProxyMiddleware({
    target: env.chatServiceUrl,
    changeOrigin: true,
  }),
);

router.use(
  "/knowledge",
  createProxyMiddleware({
    target: env.knowledgeServiceUrl,
    changeOrigin: true,
  }),
);



export default router;