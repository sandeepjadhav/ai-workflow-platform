export function serialize(
  payload: unknown,
) {

  return JSON.stringify(
    payload,
  );
}

export function deserialize<T>(
  payload: Buffer,
): T {
  console.log(payload.toString())
  return JSON.parse(
    payload.toString(),
  );
}