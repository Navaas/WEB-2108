import http from '../TodoApi'

const createTodo = (todo) => {
    return http.post('/todoUrl', todo)
}

const getAllTodo = () => {
    return http.get('/todoUrl')
}

const getTodoById = (_id) => {
    return http.get('todoUrlById')
}

const getTodoWithName = (name) => {
    return http.get(`/searchTodo?name${name}`)
}

const updateTodo = (_id) => {
    return http.put('/todoUrlById')
}

const deleteTodo = (_id) => {
    return http.delete('/todoUrlById')
}

const toggleToFalse = (_id) => {
    return http.put(`toggleToFalse/${_id}`)
}

export default {
    createTodo,
    getAllTodo,
    getTodoById,
    getTodoWithName,
    updateTodo,
    deleteTodo,
    toggleToFalse
}