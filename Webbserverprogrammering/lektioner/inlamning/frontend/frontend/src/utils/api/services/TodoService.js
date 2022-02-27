import http from '../TodoApi'

const getAllTodo = () => {
    return http.get('/todo')
}

const createTodo = (newTodo) => {
    return http.post('/newTodoObject',newTodo)
}

const updateTodo = (newTodo) => {
    return http.put('/updateTodo',newTodo)
}

const deleteTodo = (name) => {
    return http.delete(`/deleteTodo/${name}`)
}

const oneTodoByName = (name) => {
    return http.get(`/oneTodoByName/${name}`)
}

export default {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    oneTodoByName,
}