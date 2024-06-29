import { admin } from "./admin"

export const getTopics = async () => {
    try {
        await admin.connect();
        const topics = await admin.listTopics();
        await admin.disconnect();
        return topics;
    } catch (error) {
        console.log(error)
        return []
    }
}