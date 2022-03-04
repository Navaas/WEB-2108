import express from 'express'
import Configuration from './configurations/Configuration.js'
import Middlewares from './middlewares/Middlewares.js'
import AliveRoute from './routes/AliveRoutes.js'
import UserRoutes from './routes/UserRoutes.js'

const app = express()
Middlewares.apply(app)

AliveRoute.routes(app)
UserRoutes.routes(app)

Middlewares.wrongPath(app)
Middlewares.errorHandling(app)

Configuration.connectToPort(app)

export default app