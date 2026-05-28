export interface BaseEvent<T> {

  topic: string;

  payload: T;

  timestamp: string;
}