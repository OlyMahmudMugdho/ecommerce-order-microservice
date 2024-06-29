import { kafka } from "../client/kafkaClientConfig";

export const consumer = kafka.consumer({ groupId: 'my-group' })
