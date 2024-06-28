import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { Hello } from './types/types';
import { router } from './router/router';

const app = express()

app.use(morgan('combined'))
app.use(express.json())

const PORT: string | number = process.env.PORT ?? 8082;


app.use(router)

app.get("/", (req: Request, res: Response) => {
    const message: Hello = {
        ok: true,
        message: "hello world"
    }
    res.status(200).json(message)
})


app.listen(PORT, () => {
    console.info(`server is running on port ${PORT}`)
})