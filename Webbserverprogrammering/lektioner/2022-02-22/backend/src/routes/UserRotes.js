import UserController from "../controller/UserController.js"

// Endpoiont + Business Logic and CRUD Operation
const routes = (app) => {
    // CREATE
    app.post('/user/', UserController.createUser)

// READ
    app.get('/users', UserController.getUsers)
    app.get('/users/name', UserController.getUserNames)
    app.get('/user/:name', UserController.getUserByName)

    // UPDATE
    app.put('/user/', UserController.updateUserByName)

// DELETE
    app.delete('/user/:name', UserController.deleteUserByName)
}

export default {
    routes
}