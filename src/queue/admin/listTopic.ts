import { admin } from "./admin"

export const listTopics = async () => {
    const topics = await admin.listTopics();
    console.log(await topics)
}