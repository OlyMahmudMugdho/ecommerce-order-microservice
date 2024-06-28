import { admin } from "./admin"

export const getTopics = async () => {
    await admin.connect();
    const topics = await admin.listTopics();
    await admin.disconnect();
    return topics;
}