import AliveController from '../controller/AliveController.js'

const aliveRoute = (app) => {
    app.get ('/', AliveController.alive)
}

export default {
    aliveRoute
}
