import { consumer } from "./consumerConfig"


export const consumeMessage = async (topicName: string) => {
    await consumer.connect();
    await consumer.subscribe({ topic: topicName })
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
            })
        },
    })
}