import {Axios} from 'axios'

const TodoApi = Axios.create({
    baseUrl: 'http://localhost:3001'
})

export default TodoApi