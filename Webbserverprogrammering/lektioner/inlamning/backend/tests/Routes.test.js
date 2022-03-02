import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import app from '../src/Server.js'
import { describe, it } from 'mocha'

Chai.should()
Chai.use(ChaiHTTP)

const TestingCreateRoute = () => {
    describe('Test a rout exist', () => {
        it('should expect 201 OK!', (done) => {
            Chai.request(app)
                .get('/newTodoObject')
                .end((req, res) => {
                    res.should.have.a.status(201)
                    done()
                })
        })
    })
}

describe('Testing route', () => {
    TestingCreateRoute()
})