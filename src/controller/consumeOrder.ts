import { Request, Response } from "express";
import { consumeMessage } from "../queue/consumer/consume";

export const consumeOrder = async (req: Request, res: Response) => {
    const message = await consumeMessage("orders");
    return res.status(200).json(message);
}