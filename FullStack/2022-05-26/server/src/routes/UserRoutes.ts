import {Express} from 'express'
import UserController from '../controllers/UserController'
import server from '../server'


const UserRoutes = (server: Express) => {
    // Create
    server.post('/user/', UserController.createUser)

    // Read
    server.get('/user/all', UserController.getAllUsers)
    server.get('/user/name/:name', UserController.getUserByName)
    server.get('/user/:id', UserController.getUserById)
    server.get('/user/name/:name/:age', UserController.getUserByName)

    //Update
    server.put('/user/:id', UserController.updateUserById)

    // Delete
    server.delete('/user/:id', UserController.deleteUserById)
}

export default UserRoutes