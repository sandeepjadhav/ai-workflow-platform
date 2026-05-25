export const env = {

  kafkaBrokers:
    process.env.KAFKA_BROKERS ||
    "localhost:9092",
};