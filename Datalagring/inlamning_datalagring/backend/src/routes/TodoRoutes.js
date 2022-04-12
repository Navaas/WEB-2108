import TodoController from '../controller/TodoController.js'

const todoRoutes = (app) => {
    const todoUrl = '/todo'
    const todoUrlById = `${todoUrl}/:userId`
    const searchTodo = '/searchTodo/:name'
    const toggleToFalse = `/todoIsDoneToggle/:userId`

    app.post(todoUrl, TodoController.createTodo)
    app.get(todoUrl, TodoController.getAllTodo)
    app.get(todoUrlById, TodoController.getTodoById)
    app.get(searchTodo, TodoController.getTodoWithName)
    app.put(todoUrlById, TodoController.updateTodo)
    app.delete(todoUrlById, TodoController.deleteTodo)
    app.put(toggleToFalse, TodoController.todoIsDoneToggle)
}

export default {
    todoRoutes
}