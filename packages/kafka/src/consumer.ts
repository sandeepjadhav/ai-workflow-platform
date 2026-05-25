import { kafka }
  from "./client";

export async function createConsumer(
  groupId: string,
) {

  const consumer =
    kafka.consumer({
      groupId,
    });

  await consumer.connect();

  console.log(
    `Consumer Connected → ${groupId}`,
  );

  return consumer;
}