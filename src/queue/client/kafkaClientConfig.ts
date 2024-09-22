import { Kafka, logLevel } from 'kafkajs'

export const kafka: Kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka:29092'],
})
