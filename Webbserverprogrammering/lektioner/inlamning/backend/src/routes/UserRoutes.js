import UserController from '../controller/UserController.js'

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/newTodoObject/', UserController.creatToDoObject)

    // READ
    app.get('/todo', UserController.getAllToDo)
    app.get('/todo/name', UserController.getToDoNames)
    app.get('/oneTodoByName/:name', UserController.getToDoByName)

    // UPDATE
    app.put('/updateTodo/', UserController.updateToDoByName)

    // DELETE
    app.delete('/deleteTodo/:name', UserController.deleteToDoByName)
}

export default {
    routes
}