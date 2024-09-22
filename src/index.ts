import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { Hello } from './types/types';
import { router } from './router/router';
import { topicExists } from './queue/admin/topicExists';
import { createTopic } from './queue/admin/createTopic';
import { consumeMessage } from './queue/consumer/consume';
//import { consumeMessage } from './queue/consumer/consume';

const app = express()

app.use(morgan('combined'))
app.use(express.json())

const PORT: string | number = process.env.PORT ?? 8084;


app.get("/order", (req: Request, res: Response) => {
    const message: Hello = {
        ok: true,
        message: "hello world"
    }
    res.status(200).json(message)
})


app.use("/order", router)



app.listen(PORT, async () => {
    console.info(`server is running on port ${PORT}`);
    if (await !topicExists("orders")) {
        await createTopic("orders")
    }

    try {
        await createTopic("orders")
    } catch (error) {
        console.log("error")
    }
    // await consumeMessage("orders")
})