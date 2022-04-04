import http from '../TodoApi'

const todoUrl = '/todo'
const todoUrlById = `${todoUrl}/:userId`
const searchTodo = `/searchTodo`
const toggleToFalse = `/todoIsDoneToggle/:id`

const createTodo = (newTodo) => {
    return http.post(todoUrl, newTodo)
}

const getAllTodo = () => {
    return http.get(todoUrl)
}

const getTodoById = (_id) => {
    return http.get(todoUrlById)
}

const getTodoWithName = (name) => {
    return http.get(searchTodo)
}

const updateTodo = (_id) => {
    return http.put(todoUrlById)
}

const deleteTodo = (_id) => {
    return http.delete(todoUrlById)
}

const toggleDone = (_id) => {
    return http.put(toggleToFalse)
}

export default {
    createTodo,
    getAllTodo,
    getTodoById,
    getTodoWithName,
    updateTodo,
    deleteTodo,
    toggleDone
}