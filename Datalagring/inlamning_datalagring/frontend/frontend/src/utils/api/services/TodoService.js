import http from '../TodoApi'

const todoUrl = '/todo'
const todoUrlById = `${todoUrl}/:id`
const searchTodo = `/searchTodo/`
const toggleToFalse = `/todoIsDoneToggle/:id`

const createTodo = (newTodo) => {
    return http.post(todoUrl, newTodo)
}

const getAllTodo = () => {
    return http.get(todoUrl)
}

const getTodoById = (_id) => {
    return http.get(`/todo/${_id}`)
}

const getTodoWithName = (name) => {
    return http.get(searchTodo+name)
}

const updateTodo = (_id, changesTodo) => {
    return http.put(`/todo/${_id}`, changesTodo)
}

const deleteTodo = (_id) => {
    return http.delete(`/todo/${_id}`)
}

const toggleDone = (_id) => {
    return http.put(`/todoIsDoneToggle/:id`)
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