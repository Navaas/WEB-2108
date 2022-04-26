import express from 'express'
import Configuration from "./configuration/Configuration";
import Middlewares from "./middlewares/Middlewares";
import Logger from './utils/Logger'

const server = express()
Middlewares.applyMiddlewares(server)

// Routes

Middlewares.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
    Logger.debug('--== lolz ==--')
})

export default server