import AliveController from "../controller/AliveController.js";

// Endpoint + Busniness Logic
const routes = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    routes
}