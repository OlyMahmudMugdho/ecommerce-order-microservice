import express, { Request, Response } from 'express'

const app = express()

app.use(express.json())

const PORT: string | number = process.env.PORT || 8080;



app.listen(8080, () => {
    console.info(`server is running on port ${PORT}`)
})