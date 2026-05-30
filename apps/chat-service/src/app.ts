import express from "express";
import cors from "cors";
import helmet from "helmet";
import conversationRoutes from "./routes/conversation.routes";
import messageRoutes from "./routes/message.routes";
import streamRoutes from "./streaming/stream.routes";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/conversations", conversationRoutes,);

app.use("/messages", messageRoutes,);
app.use("/stream", streamRoutes,);

app.get("/health", (req, res) => {

  return res.json({
    status: "ok",
    service:
      "chat-service",
  });
},
);

export default app;
