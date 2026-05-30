import {
  Response,
} from "express";

import {
  AuthRequest,
} from "../middlewares/auth.middleware";

import {
  StreamService,
} from "./stream.service";

const streamService =
  new StreamService();

export async function streamChat(
  req: AuthRequest,
  res: Response,
) {

  const {

    conversationId,

    content,

  } = req.body;

  res.setHeader(
    "Content-Type",
    "text/event-stream",
  );

  res.setHeader(
    "Cache-Control",
    "no-cache",
  );

  res.setHeader(
    "Connection",
    "keep-alive",
  );

  res.flushHeaders();
  console.log(
    "Starting chat stream for conversation:",
    req.body,
  );
  await streamService.streamChat(
    conversationId,
    content,

    (token) => {
      console.log(
        "Streaming Token:",
        token,
      );
      res.write(
        `data: ${token}\n\n`,
      );
    },
  );

  res.write(
    "event: done\ndata: completed\n\n",
  );

  res.end();
}