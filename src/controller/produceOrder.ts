import { Request, Response } from "express";
import { produce } from "../queue/producer/produce";
import { Order } from "../types/types"

export const produceOrder = async (req: Request, res: Response) => {
    const order: Order = req.body;

    if (!order.items) {
        return res.status(406).json({
            "error": true,
            "message": "items cannot be empty"
        })
    }

    order.items.map(item => {
        if (!item.productId) {
            return res.status(406).json({
                "error": true,
                "message": "productId cannot be empty"
            })
        }
    })

    try {
        const response = await produce("orders", order);
        return res.status(200).json({
            "ok": true,
            "success" : true,
            "message": "order added to queue"
        })

    } catch (error) {
        return res.status(500).json(error)
    }
}