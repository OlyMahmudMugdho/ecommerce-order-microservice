import { Partitioners } from "kafkajs";
import { kafka } from "../client/kafkaClientConfig";


export const producer = kafka.producer({
    createPartitioner: Partitioners.DefaultPartitioner,
    allowAutoTopicCreation: false,
})