import TodoModel from '../models/TodoModel.js'
import Logger from '../utils/Logger.js'
import StatusCode from '../configuration/StatusCode.js'

const createTodo = async (req, res) => {
    Logger.http(req.body)

    const todo = new TodoModel({
        name: req.body.name,
        todo: req.body.todo,
        done: false
    })
    Logger.debug(todo)

    try {
        const response = await todo.save()
        Logger.debug(response)
        res.status(StatusCode.CREATED).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getAllTodo = async (req, res) => {
    try {
        const response = await TodoModel.find()
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({message: error.message})
    }
}

const getTodoById = async (req, res) => {
    try {
        const response = await TodoModel.findById(req.params.todo)   // UserId på git?
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR.send({
            message: 'Error occurred while trying to retrieve user with id:' + req.params.todo
        }))
    }
}

const getTodoWithName = async (req, res) => {
    try {
        const response = await TodoModel.find({name: req.params.name})
        response.length !== 0
            ? res.status(StatusCode.OK).send(response)
            : res.status(StatusCode.NOT_FOUND).send({message: 'Could not find todo by name:' + req.params.name})
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to retrieve todo with name:' + req.params.todo,  // userId på git?
            error: error.message
        })
    }
}

const updateTodo = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(StatusCode.BAD_REQUEST).send({message: 'Cannot update emty values'})
        }
        const response = await TodoModel.findByIdAndUpdate(req.params.todo, {
            todo: req.body.todo,
            name: res.body.names
        }, {new: true})
        res.status(StatusCode.OK).send(response)
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR.send)({
            message: 'Error occurred while trying to update value of the todo with ID:' + req.params.todo, // userid på git?
            error: error.message
        })
    }
}

const deleteTodo = async (req, res) => {
    try {
        const response = await TodoModel.findByIdAndDelete(req.params.todo) // userid på git?
        res.status(StatusCode.OK).send({
            message: `Successfully deleted the todo: ${response.todo} and ID: ${response.todo}`  // userid på git?
        })
    } catch (error) {
        res.status(StatusCode.INTERNAL_SERVER_ERROR).send({
            message: 'Error while trying to delete the todo with ID:' + req.params.todo, // userId på git?
            error: error.message
        })
    }
}

const todoIsDoneToggle = (req, res) => {
    const id = Number(req.params.todo) // userid på git?
    TodoModel[id].Done = !TodoModel[id].Done
    res.status(StatusCode.ACCEPTED).send(TodoModel[id])
}


export default {
    createTodo,
    getAllTodo,
    getTodoById,
    getTodoWithName,
    updateTodo,
    deleteTodo,
    todoIsDoneToggle
}