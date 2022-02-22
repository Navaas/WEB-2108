import toDoDate from '../data/toDoData.js'

const creatToDoObject = (req, res) => {
    const {name, todo,} = req.body
    const newObject = {
        name: name,
        todo: todo,
        id: toDoDate.length
    }
    toDoDate.push(newObject)
    res.status(201).send(toDoDate)
}

const getAllToDo = (req, res) => {
    res.status(200).send(toDoDate)
}

const toDoNames = () => {
    const names = []
    toDoDate.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const getToDoNames = (req, res) => {
    const responseFromDb = toDoNames()
    res.status(200).send(responseFromDb)
}

const searchToDoByName = (name) => {
    let object = `Could not find "${name}" in database`
    toDoDate.forEach(user => {
        if (name === user.name) {
            object = user
            return user
        }
    })
    return object
}

const getToDoByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchToDoByName(name)
    res.status(200).send(responseFromDb)
}

const modifyToDoByName = (name, newName, todo) => {
    let object = `Could not find "${name}" in database`
    toDoDate.forEach(user => {
        if (name === user.name) {
            user.name = newName
            user.todo = todo
            object = user
            return user
        }
    })
    return object
}

const updateToDoByName = (req, res) => {
    const {name, newName, todo} = req.body
    const response = modifyToDoByName(name, newName, todo)
    res.status(202).send(response)
}

const removeToDoByName = (name) => {
    let text = `User with name: "${name}" `

    for (let i = 0; i < toDoDate.length; i++) {
        if (name === toDoDate[i].name) {
            text += `was deleted from database!`
            toDoDate.splice(i, 1)
            return text
        }
    }

    text += `don't exist in database!`
    return text
}

const deleteToDoByName = (req, res) => {
    const name = req.params.name
    const responseFromDB = removeToDoByName(name)
    res.status(200).send(responseFromDB)
}

export default {
    creatToDoObject,
    getAllToDo,
    toDoNames,
    getToDoNames,
    getToDoByName,
    updateToDoByName,
    deleteToDoByName
}