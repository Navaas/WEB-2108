import Chai from 'chai'
import ChaiHTTP from "chai-http";
import {describe, it} from "mocha";
import app from '../src/Server.js'
import {response} from "express";

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const newTodo = {
    name: "Sofie",
    todo: "Föreläsning"
}

const updateTodo = {
    name: "Sofie",
    newName: "Vera",
    todo: "Besikta bilen"
}

const getAllToDo = () => {
    describe('Testing to get all data from array (GET)', () => {
        it('should expect array data be returned', (done) => {
            Chai.request(app)
                .get('/todo')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.be.equal(5)
                    expect(body.length).to.be.not.equal(2)

                    const todo = body[0]
                    expect(todo).to.be.an('object')
                    expect(todo.name).to.equal('Filip')
                    expect(todo.todo).to.equal('Köper bil')
                    done()
                })
        })
    })
}

const getToDoNames = () => {
    describe('Testing to get an array by name (GET)', () => {
        it('should expect an array by name to be returned', (done) => {
            Chai.request(app)
                .get('/todo/name')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(5)
                    expect(body.length).to.not.equal(1)

                    let todo = body[0]
                    expect(todo).to.be.an('object')
                    expect(todo.name).to.equal('Filip')

                    todo = body[2]
                    expect(todo.name).to.equal('Hugo')
                    done()
                })

        })
    })
}

const getToDoByName = () => {
    const name = 'Hugo'
    describe('Testing to get data by name (GET)', () => {
        it('should expect an object returned', (done) => {
            Chai.request(app)
                .get(`/oneTodoByName/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal('Hugo')
                    expect(body.todo).to.equal('Djungelgympa 15.00')
                    done()
                })
        })
    })
}

const lookIfTodoNotExist = (name) => {
    describe('Testing that get correct response by name (GET)', () => {
        it('should get a response of a name exist', (done) => {
            Chai.request(app)
                .get(`/oneTodoByName/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Could not find "${name}" in database`)
                    done()
                })
        })
    })
}

const createTodo = () => {
    describe('Testing to create new data (POST)', () => {
        it('should expect new data to be created', (done) => {
            Chai.request(app)
                .post('/newTodoObject')
                .send(newTodo)
                .end((error, response) => {
                    expect(response.status).to.equal(201)

                    const body = response.body[5]
                    expect(body.name).to.equal(newTodo.name)
                    expect(body.todo).to.equal(newTodo.todo)
                    done()
                })
        })
    })
}

const lookIfTodoExist = (name) => {
    describe('Testing to look that created data exist', () => {
        it('should return created data', (done) => {
            Chai.request(app)
                .get(`/oneTodoByName/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(newTodo.name)
                    expect(body.todo).to.equal(newTodo.todo)
                    done()
                })
        })
    })
}

const updateToDoByName = () => {
    describe('Testing to update data by name (PUT)', () => {
        it('should get object with update data', (done) => {
            Chai.request(app)
                .put('/updateTodo')
                .send(updateTodo)
                .end((error, response) => {
                    expect(response.status).to.equal(202)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(updateTodo.newName)
                    expect(body.todo).to.equal(updateTodo.todo)
                    done()
                })
        })
    })
}

const deleteTodoByName = (name) => {
    describe('Testing to delete a update todo (DELETE)', () => {
        it('should get a response that the name is deleted', (done) => {
            Chai.request(app)
                .delete(`/deleteTodo/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`User with name: "${name}" was deleted from database!`)
                    done()
                })
        })
    })
}

const deletedTodoDontExist = (name) => {
    describe('Testing to delete update todo (DELETE)', () => {
        it('should get a response that name is not exist', (done) => {
            Chai.request(app)
                .delete(`/deleteTodo/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`User with name: "${name}" don't exist in database!`)
                    done()
                })
        })
    })
}


describe('TESTING EXISTING DATA ROUTES', () => {
    getAllToDo()
    getToDoNames()
    getToDoByName()
    lookIfTodoNotExist(newTodo.name)
    createTodo()
    lookIfTodoExist(newTodo.name)
    updateToDoByName()
    deleteTodoByName(updateTodo.newName)
    deletedTodoDontExist(updateTodo.newName)
})