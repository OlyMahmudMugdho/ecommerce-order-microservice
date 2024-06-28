import { admin } from "./admin"

export const createTopic = async (topicName: string) => {

    try {
        await admin.connect();
        const created = await admin.createTopics({
            topics: [
                {
                    topic: topicName,
                    numPartitions: 1,
                    replicationFactor: 1
                }
            ]
        });
        if (await created) {
            console.log(`topic ${topicName} created successfully`)
        }
        else {
            console.log(`topic ${topicName} creation failed`)
        }
    } catch (error) {
        console.error(error)
    }
    await admin.disconnect();
}