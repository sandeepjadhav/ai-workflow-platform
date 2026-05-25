import {
  publishEvent,
  TOPICS,
} from "./src";

async function main() {

  await publishEvent(
    TOPICS.USER_CREATED,

    {
      userId: "123",

      email: "test@test.com",
    },
  );

  console.log(
    "Test event published",
  );
}

main();