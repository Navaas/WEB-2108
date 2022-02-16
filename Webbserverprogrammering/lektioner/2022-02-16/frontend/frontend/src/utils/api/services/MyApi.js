import Axios from 'axios'

const myApi = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default myApi