import { Router } from "express";
import { showMessage } from "../controller/testMessage";
import { produceOrder } from "../controller/produceOrder";
import { consumeMessage } from "../queue/consumer/consume";
// import { consumeOrder } from "../controller/consumeOrder";

export const router: Router = Router()

router
    .get('/test', showMessage)
    .post('/order', produceOrder)
    .get('/consume', consumeMessage)
    // .get('/consume', consumeOrder)
