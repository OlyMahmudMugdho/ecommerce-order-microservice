import { Router } from "express";
import { showMessage } from "../controller/testMessage";
import { produceOrder } from "../controller/produceOrder";

export const router: Router = Router()

router
    .get('/test', showMessage)
    .post('/order', produceOrder)
