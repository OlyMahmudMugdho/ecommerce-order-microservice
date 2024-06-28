import { admin } from "./admin"


export const deleteTopic = async (topicName: string) => {
    await admin.connect()
    await admin.deleteTopics({
        topics: [topicName]
    })
    await admin.disconnect()
} 