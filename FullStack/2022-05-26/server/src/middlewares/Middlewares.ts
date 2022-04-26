import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import StatusCode from "../utils/StatusCode";
import MorganMiddlewares from "./MorganMiddlewares";

dotenv.config()
const env = process.env.NODE_ENV || 'production'

// Middlewares
const allowedOrigins = ['http://localhost:3000']
const allowedMethods = ['Get', 'POST', 'PUT', 'DELETE']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    methods: allowedMethods
}

const applyMiddlewares = (app: express.Application) => {
    app.use(cors(options))
    app.use(helmet())
    app.use(MorganMiddlewares)
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
}