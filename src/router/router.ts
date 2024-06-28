import { Router } from "express";
import { showMessage } from "../controller/testMessage";

export const router: Router = Router()

router.get('/test', showMessage)