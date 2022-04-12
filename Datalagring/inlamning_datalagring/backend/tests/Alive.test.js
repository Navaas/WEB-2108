import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it as test} from 'mocha'
import app from '../src/Server.js'

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const testingAliveRoute = () => {
    describe('Testing alive route', () => {
        test('Expecting 200', (done) => {
            Chai.request(app)
                .get('/')
                .end((req, res) => {
                    expect(res.status).to.equal(200)
                    expect(res.text).to.equal('Yey, API is alive!!')
                    done()
                })
        })
    })
}

describe('Testing alive route', () => {
    testingAliveRoute()
})