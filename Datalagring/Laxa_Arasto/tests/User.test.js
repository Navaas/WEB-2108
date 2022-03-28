import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it as test} from 'mocha'
import app from '../Server.js'
import StatusCode from "../config/StatusCode.js";


Chai.should()
Chai.use(ChaiHTTP)

const randomString = Math.random().toString(36).substring(7)
const userId = '623edcbc3d44bb1c892b509d'
const user = {
    username: randomString,
    password: randomString,
}

const testingNonExistingRoute = () => {
    describe('testing a route that not exist', () => {
        test('expecting 404 not found', (done) => {
            Chai.request(app)
                .get(`/${randomString}`)
                .end((request, response) => {
                    response.should.have.a.status(StatusCode.NOT_FOUND)
                    done()
                })
        })
    })
}

const createUser = () => {
    describe('testing create (post) method for user entity', () => {
        test('expecting user to be created', (done) => {
            Chai.request(app)
                .post('/user')
                .send(user)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.CREATED)
                    response.body.should.be.an('object')
                    response.body.should.have.property('username').equal(user.username)
                    response.body.should.have.property('password').equal(user.password)
                    done()
                })
        })
    })
}

const getAllUsers = () => {
    describe('testing to get all users', () => {
        test('expecting user to be created', (done) => {
            Chai.request(app)
                .get(`/user`)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    response.body.should.be.an('array')
                    response.body.length.should.be.equal(response.body.length)
                    done()
                })
        })
    })
}

const updateUser = () => {
    describe('testing to update a user', () => {
        test('expecting user is update', (done) => {
            Chai.request(app)
                .put(`/user/${userId}`)
                .send(user)
                .end((error, response) => {
                    response.should.have.a.status(StatusCode.OK)
                    response.body.should.be.an('object')
                    response.body.should.have.property('_id').equal(userId)
                    response.body.should.have.property('username').equal(user.username)
                    response.body.should.have.property('password').equal(user.password)
                    done()
                })
        })
    })
}

const deleteUser = () => {
    describe('testing delete a user', () => {
        test('expecting user is delete', (done) => {
            Chai.request(app)
                .delete(`/user/${userId}`)
                .end((error, response) => {
                    response.should.have.status(StatusCode.OK)
                    done()
                })
        })
    })
}

describe('testing user API route', () => {
    testingNonExistingRoute()
    createUser()
    getAllUsers()
    updateUser()
    deleteUser()
})