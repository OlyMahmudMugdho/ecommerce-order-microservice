import { consumer } from "./consumerConfig"
import { KafkaMessage } from "kafkajs";

let consumedMessage : any = null;

export const consumeMessage = async (topicName: string) => {
    await consumer.connect();
    await consumer.subscribe({ topic: "orders", fromBeginning: true })
    await consumer.run({
        eachMessage: async ({ message }) => {
            consumedMessage = message.value?.toString();
            //console.log(message.value?.toString())
        },

    })

/*     try {
    } catch (error) {
        console.log("error")
    } */

    return consumedMessage
}

export const getLatestMessage = () => {
    return consumedMessage;
  };