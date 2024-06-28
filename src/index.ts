import express, { Request, Response } from 'express';
import morgan from 'morgan'
import { Hello } from './types/types';
import { router } from './router/router';

const app = express()

app.use()
app.use(express.json())

const PORT: string | number = process.env.PORT ?? 8080;


app.use(router)

app.get("/", (req: Request, res: Response) => {
    const message: Hello = {
        ok: true,
        message: "hello world"
    }
    res.status(200).json(message)
})


app.listen(8080, () => {
    console.info(`server is running on port ${PORT}`)
})