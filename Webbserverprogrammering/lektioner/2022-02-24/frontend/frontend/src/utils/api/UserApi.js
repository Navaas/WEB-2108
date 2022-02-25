import Axios from 'axios'

const UserApi = Axios.create({
    baseURL: 'http://localhost:3001'
})

export default UserApi