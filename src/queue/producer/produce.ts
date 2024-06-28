import { producer } from "./producerConfig"


export const produce = async (topicName: string, message: any) => {
    await producer.connect();
    await producer.send({
        topic: topicName,
        messages: [
            message
        ],
    });
    await producer.disconnect();
}