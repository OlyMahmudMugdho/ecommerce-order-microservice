import { admin } from "./admin"


export const deleteTopic = async (topicName: string) => {
    await admin.connect()
    try {
        await admin.deleteTopics({
            topics: [topicName]
        })
    } catch (error : any) {
        console.log(error?.message)
    }
    await admin.disconnect()
} 