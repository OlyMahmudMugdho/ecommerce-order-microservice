import { Router } from "express";
import { showMessage } from "../controller/testMessage";
import { produceOrder } from "../controller/produceOrder";
import { consumeOrder } from "../controller/consumeOrder";

export const router: Router = Router()

router
    .get('/test', showMessage)
    .post('/order', produceOrder)
    .get('/consume', consumeOrder)
