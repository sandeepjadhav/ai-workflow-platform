export interface KafkaMessage<T> {

  key?: string;

  value: T;
}