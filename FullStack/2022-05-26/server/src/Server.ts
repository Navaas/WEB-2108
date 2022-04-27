import express from 'express'
import Configuration from "./configuration/Configuration";
import Middlewares from "./middlewares/Middlewares";
import Logger from './utils/Logger'
import AliveRoutes from "./routes/AliveRoutes";
import UserRoutes from "./routes/UserRoutes";

const server = express()
Middlewares.applyMiddlewares(server)

// Routes
AliveRoutes(server)
UserRoutes(server)

Middlewares.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
    Logger.debug('--== lolz ==--')
})

export default server