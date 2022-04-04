import cors from 'cors'
import express from 'express'

const allowedRequestOrigin ='*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const options_cors = {
    origin: allowedRequestOrigin,
    methods: allowedRequestMethods
}

const MiddlewaresApply = (app) => {
    app.use(cors(options_cors))
    app.use(express.json())
}

export default MiddlewaresApply