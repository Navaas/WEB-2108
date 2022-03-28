import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import middlewares from './src/middleware/Middlewares.js'
import configuration from './config/Configuration.js'
import UserRoutes from './src/routes/User.routes.js'


const app = express()
app.use(express.json());
app.use(express.urlencoded());
app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes')
})

UserRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

configuration.connectToDatabase()
configuration.connectToPort(app)

export default app