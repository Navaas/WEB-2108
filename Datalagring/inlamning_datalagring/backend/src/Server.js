import express from 'express'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from 'morgan'
import Middlewares from "./middlewares/Middlewares.js"
import Configurations from "./configuration/Configuration.js"
import TodoRoutes from "./routes/TodoRoutes.js"
import MiddlewaresApply from './configuration/MiddlewaresApply.js'

dotenv.config()
const app = express()

app.use(MiddlewaresApply.MiddlewaresApply)
app.use(helmet())
app.use(express.urlencoded())
app.use(morgan('common'))

TodoRoutes.TodoRoutes(app)
app.use(Middlewares.notFound)
app.use(Middlewares.errorHandler)

Configurations.connectToDatabase(app)
Configurations.connectToPort(app)

export default app