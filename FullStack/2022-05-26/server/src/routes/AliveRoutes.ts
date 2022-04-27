import AliveController from "../controllers/AliveController"
import { Express } from 'express'

const AliveRoutes = (server: Express) => {
    server.get('/', AliveController.aliveController)
}

export default AliveRoutes