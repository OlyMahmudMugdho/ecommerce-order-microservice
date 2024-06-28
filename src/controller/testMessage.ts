import { Hello } from "../types/types"
import { Request, Response } from "express"

export const showMessage : object = (req : Request, res : Response) => {
    const message : Hello = {
        ok : true,
        message : "controller test done"
    }
    res.status(200).json(message)
}