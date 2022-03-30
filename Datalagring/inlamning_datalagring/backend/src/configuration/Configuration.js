import Logger from '../utils/Logger.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";

dotenv.config()
const port = process.env.SERVER_PORT
const environment = process.env.ENVIRONMENT
const mongodb_url = process.env.MONGODB_URL
const dbName = process.env.MONGODB_DB_NAME

function isServerInDevelopmentMode() {
    const devEnv = 'development'
    const env = environment|| devEnv
    const isDevelopment = env === devEnv
    if (isDevelopment) {
        Logger.warn('server is in development mode!'.toUpperCase())
    }
}

const connectToPort = (app) => {
    app.listen(port, () => {
        isServerInDevelopmentMode()
        Logger.info(`Server started at http://localhost:${ port }`)
    })
}

// Mongoose
const connectToDatabase = async () => {
    const url = mongodb_url + dbName
    try {
        await mongoose.connect(url)
        Logger.info('Successfully connected to the Database')
    } catch (error) {
        Logger.error('Error connecting to the Datebase'.toUpperCase(), error)
        process.exit()
    }
}

export default {
    connectToPort,
    connectToDatabase
}