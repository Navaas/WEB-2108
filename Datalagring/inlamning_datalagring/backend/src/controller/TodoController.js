import TodoModel from '../models/TodoModel.js'
import Logger from '../utils/Logger.js'
import StatusCode from '../configuration/StatusCode.js'

const createTodo = async (req, res) => {
    Logger.info('createTodo()')
    Logger.http(req.body)
    const {name, todo} = req.body
    if (name && todo) {
        const newObject = {
            name: name,
            todo: todo,
        }
        Logger.debug(newObject)

        try {
            const todos = new TodoModel(newObject)
            const response = await todos.save()
            Logger.debug(response)
            res.status(StatusCode.CREATED).send(response)
        } catch (error) {
            Logger.error(error)
            res.status(StatusCode.BAD_REQUEST).send({
                error: 'Error creating user'
            })
        }
    } else {
        Logger.error('name, todo failed')
        res.status(StatusCode.NO_CONTENT).send('No body')
    }
}


const getAllTodo = async (req, res) => {
    try {
        TodoModel.find({}, (error, todos) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting todos'
                })
            } else {
                Logger.info(todos)
                res.status(StatusCode.OK).send(todos)
            }
        })
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting todos'
        })
    }
}

const getTodoById = async (req, res) => {
    try {
        TodoModel.findById(req.params.userId, (error, todos) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting todo'
                })
            } else {
                Logger.info(todos)
                res.status(StatusCode.OK).send(todos ? todos : {
                    message: `Todo with id '${req.params.userId} not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting todo'
        })
    }
}

const getTodoWithName = async (req, res) => {
    try {
        TodoModel.find({name: req.params.name}, (error, todos) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error getting todos'
                })
            } else {
                Logger.info(todos)
                res.status(StatusCode.OK).send(todos.length > 0 ? todos :
                    `Todo with name '${req.params.name}' not found`
                )
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error getting todos'
        })
    }
}

const updateTodo = async (req, res) => {
    try {
        const updateTodos = {
            name: req.body.name,
            todo: req.body.todo
        }
        Logger.debug(req.params.userId)
        Logger.debug(updateTodos)
        TodoModel.findByIdAndUpdate(req.params.userId, updateTodos, {new: true}, (error, todo) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error updating todo with id' + req.params.userId
                })
            } else {
                Logger.info(todo)
                res.status(StatusCode.OK).send(todo ? todo : {
                    message: `User with id '${req.params.userId}' not found`
                })
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error updating todo'
        })
    }
}

const deleteTodo = (req, res) => {
    try {
        TodoModel.findByIdAndRemove(req.params.userId, (error, todos) => {
            if (error) {
                Logger.error(error)
                res.status(StatusCode.BAD_REQUEST).send({
                    error: 'Error deleting todo'
                })
            } else {
                Logger.info(todos)
                res.status(StatusCode.OK).send(
                    todos
                        ?
                        `Todo with id '${req.params.userId}' was deleted from database!`

                        :
                        `Todo with id '${req.params.userId}' not found`
                )
            }
        })
    } catch (error) {
        Logger.error(error)
        res.status(StatusCode.BAD_REQUEST).send({
            error: 'Error deleting todo'
        })
    }
}

const todoIsDoneToggle = (req, res) => {
    const id = Number(req.params.userId)
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