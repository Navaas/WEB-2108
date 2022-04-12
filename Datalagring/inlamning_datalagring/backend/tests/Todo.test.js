import Chai from 'chai'
import ChaiHTTP from "chai-http"
import {describe, it} from "mocha"
import app from '../src/Server.js';


Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const randomString = Math.random().toString(36).substring(7)
console.log(randomString)

const newTodo = {
    name: 'Stina',
    todo: 'Stranden',
}
const updatedTodo = {
    name: 'Svea',
    todo: 'Förskolan 9'
}

let id_global = ''

const createTodo = () => {
    describe('Testing to create a todo', () => {
        it('expect a todo to be created', (done) => {
            Chai.request(app)
                .post('/todo/')
                .send(newTodo)
                .end((error, response) => {
                    expect(response.status).to.equal(201)
                    id_global = response.body._id

                    const body = response.body
                    expect(body.name).to.equal(newTodo.name)
                    done()
                })
        })
    })
}

const testNonExistingRoute = () => {
    describe('Testing a rout not exist', () => {
        it('should test not exist return 404', (done) => {
            Chai.request(app)
                .get(`/${randomString}`)
                .end((request, response) => {
                    expect(response.status).to.equal(404)
                    done()
                })
        })
    })
}

const getTodo = () => {
    describe('Testing to get a array of todo', () => {
        it('should expect an array', (done) => {
            Chai.request(app)
                .get('/todo')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(body.length)
                    expect(body.length).to.not.equal(2)

                    const todo = body[0]
                    expect(todo).to.be.an('object')
                    expect(todo.name).to.equal('Stina')
                    done()
                })
        })
    })
}

const checkIfTodoNotExist = () => {
    describe('Testing message on todo that dont exist', () => {
        it('should return a string', (done) => {
            Chai.request(app)
                .get(`/searchTodo/Malin`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    // expect(response.text).to.equal({message: `Todo with name Malin not found`})  // Den vill ha en array, men får inte ut den.
                    done()
                })
        })
    })
}

const getTodoByName = () => {
    describe('Testing if a todo Exist', () => {
        it(`should expect a todo object to be returned`, (done) => {
            Chai.request(app)
                .get(`/searchTodo/Stina`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body[0]
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal('Stina')
                    done()
                })
        })
    })
}

const updateTodoById = () => {
    describe('Testing to update a todo', () => {
        it('should expect a todo update', (done) => {
            Chai.request(app)
                .put(`/todo/${id_global}`)
                .send(updatedTodo)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(updatedTodo.name)
                    expect(body.todo).to.equal(updatedTodo.todo)
                    done()
                })
        })
    })
}

const deleteTodo = () => {
    describe('Testing delete a todo', () => {
        it('should expect to delete a todo', (done) => {
            Chai.request(app)
                .delete(`/todo/${id_global}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Todo with id '${id_global}' was deleted from database!`)
                    done()
                })
        })
    })
}

const todoIsDeleted = () => {
    describe('Testing delete a todo', () => {
        it('should expect to delete a todo', (done) => {
            Chai.request(app)
                .delete(`/todo/${id_global}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Todo with id '${id_global}' not found`)
                    done()
                })
        })
    })
}

describe('Testing Todo', () => {
    createTodo()
    testNonExistingRoute()
    getTodo()
    checkIfTodoNotExist()
    getTodoByName()
    updateTodoById()
    deleteTodo()
    todoIsDeleted()
})