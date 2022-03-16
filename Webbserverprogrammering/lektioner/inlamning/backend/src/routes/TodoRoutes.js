import TodoController from '../controller/TodoController.js'

// Endpoint + Business Logic and CRUD Operations
const routes = (app) => {
    // CREATE
    app.post('/newTodoObject/', TodoController.creatToDoObject)

    // READ
    app.get('/todo', TodoController.getAllToDo)
    app.get('/todo/name', TodoController.getToDoNames)
    app.get('/oneTodoByName/:name', TodoController.getToDoByName)
    app.put('/todoDone/:id', TodoController.toggleToFalse)


    // UPDATE
    app.put('/updateTodo/', TodoController.updateToDoByName)

    // DELETE
    app.delete('/deleteTodo/:name', TodoController.deleteToDoByName)
}

export default {
    routes
}