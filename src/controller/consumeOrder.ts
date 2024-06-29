import { Request, Response } from "express";
import { consumeMessage } from "../queue/consumer/consume";

export const consumeOrder = async (req: Request, res: Response) => {
    await consumeMessage("orders");
    return res.sendStatus(200);
}