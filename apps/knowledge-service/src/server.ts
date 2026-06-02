import app from "./app";

import { env }
  from "./config/env";

async function start() {

  app.listen(

    env.port,

    () => {

      console.log(
        `Knowledge Service running on ${env.port}`,
      );
    },
  );
}

start();