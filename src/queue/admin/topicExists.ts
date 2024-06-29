import { getTopics } from "./getTopics"

export const topicExists = async (topicName: string) => {
    try {
        const topics = await getTopics();
        const topic = topics.map(topic => topics.includes(topic))
        if (topic.length == 0) {
            return false;
        }
        else {
            return true;
        }
    } catch (error) {
        console.log("cannot check topics")
        return true;
    }
}