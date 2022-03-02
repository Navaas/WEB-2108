import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import app from '../src/Server.js'
import { describe, it } from 'mocha'

Chai.should()
Chai.use(ChaiHTTP)

const TestingExistingRoute = () => {
    describe('Test a rout exist', () => {
        it('should expect 200 OK!', (done) => {
            Chai.request(app)
                .get('/')
                .end((req, res) => {
                    res.should.have.a.status(200)
                    done()
                })
        })
    })
}

describe('Testing route', () => {
    TestingExistingRoute()
})