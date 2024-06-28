import { Admin } from "kafkajs";
import { kafka } from "../client/kafkaClientConfig";

export const admin : Admin = kafka.admin()
