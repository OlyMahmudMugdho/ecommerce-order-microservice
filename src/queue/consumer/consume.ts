import { consumer } from "./consumerConfig"
import { KafkaMessage } from "kafkajs";

export const consumeMessage = async (topicName: string) => {
    try {
        await consumer.connect();
        await consumer.subscribe({ topic: topicName, fromBeginning: true })
        await consumer.run({
            eachMessage: async ({ message }) => {
                console.log(message.value?.toString())
            },

        })
    } catch (error) {
        console.log("error")
    }
}