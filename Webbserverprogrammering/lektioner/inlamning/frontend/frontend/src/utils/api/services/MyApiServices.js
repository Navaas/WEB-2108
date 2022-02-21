import http from './MyApi'

const Alive = () => {
    return http.get('/')
}

const ToDoList = (name) => {
    return http.get(`/user/:${name}`)
}

export default {
    Alive,
    ToDoList,
}