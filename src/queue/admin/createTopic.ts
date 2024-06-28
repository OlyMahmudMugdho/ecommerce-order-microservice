import { admin } from "./admin"

export const createTopic = async (topicName : string) => {
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
    await admin.disconnect();
}