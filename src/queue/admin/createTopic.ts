import { admin } from "./admin"

export const createTopic = async () => {
    await admin.connect();
    const created = await admin.createTopics({
        topics: [
            {
                topic: 'test-topic',
                numPartitions: 1,
                replicationFactor: 1
            }
        ]
    });
    if (await created) {
        console.log(`topic created successfully`)
    }
    else {
        console.log('topic creation failed')
    }
    await admin.disconnect();
}