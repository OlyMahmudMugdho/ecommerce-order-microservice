import { Partitioners, Producer } from "kafkajs";
import { kafka } from "../client/kafkaClientConfig";


export const producer: Producer = kafka.producer()