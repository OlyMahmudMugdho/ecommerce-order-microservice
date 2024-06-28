import { Order } from "../../types/types";
import { producer } from "./producerConfig"


export const produce = async (topicName: string, message: Order) => {
    await producer.connect();
    await producer.send({
        topic: topicName,
        messages: [
            { key: message.userId, value: message.toString() }
        ],
    });
    await producer.disconnect();
}