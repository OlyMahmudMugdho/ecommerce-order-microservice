import { admin } from "./admin"


export const deleteTopic = async (topicName: string) => {
    await admin.connect()
    try {
        await admin.deleteTopics({
            topics: [topicName]
        })
    } catch (error) {
        console.log(error)
    }
    await admin.disconnect()
} 