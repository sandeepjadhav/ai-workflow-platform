import app from "./app";

import { env }
  from "./config/env";

const server =
  app.listen(
    env.port,

    () => {

      console.log(
        `Auth Service running on ${env.port}`,
      );
    },
  );

process.on(
  "SIGTERM",

  () => {

    console.log(
      "SIGTERM received",
    );

    server.close(() => {

      console.log(
        "Server closed",
      );

      process.exit(0);
    });
  },
);