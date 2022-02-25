import AliveController from "../controller/AliveController.js";

// Endpoiont + Business Logic
const routes = (app) => {
    app.get('/', AliveController.alive)
}

export default {
    routes
}