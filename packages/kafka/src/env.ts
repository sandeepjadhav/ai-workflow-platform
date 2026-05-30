export const env = {
  kafkaBrokers:
    process.env.KAFKA_BROKERS ||
    ["ai-kafka:9092"],
  kafkaConsumerUsername:
    process.env.KAFKA_CONSUMER_USERNAME ||
    "ai_platform_consumer",
  kafkaConsumerPassword:
    process.env.KAFKA_CONSUMER_PASSWORD || "aiplatformconsumer12345",
  kafkaProducerUsername:
    process.env.KAFKA_PRODUCER_USERNAME ||
    "ai_platform",
  kafkaProducerPassword:
    process.env.KAFKA_PRODUCER_PASSWORD || "aiplatform123456"
};
