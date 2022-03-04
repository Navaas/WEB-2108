import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from '../src/server.js'
import {response} from "express";

Chai.should()
Chai.use(ChaiHTTP)
const expect = Chai.expect

const testNonExistingRoute = () => {
    describe('Testing a rout that does not exist', () => {
        it('should test a route that does not exist and returns 404', (done) =>{
            Chai.request(app)
                .get('/ramdomUrl')
                .end((req, res) => {
                    // res.should.have.a.status(404)
                    expect(response.status).to.equal(404)
                    done()
                })
        })
    })
}

const testNonExistingRouteExpect = () => {
    describe('Testing a rout that does not exist with expect', () => {
        it('should test a route that does not exist and returns 404 with expect', (done) =>{
            Chai.request(app)
                .get('/ramdomUrl')
                .end((req, res) => {
                    res.should.have.a.status(404)
                    done()
                })
        })
    })
}

const testExistingRoutes = () => {
    describe('Testing a rout that does exist', () => {
        it('should test a route that does not exist and returns 200', (done) => {
            Chai.request(app)
                .get('/')
                .end((req, res) => {
                    // res.should.have.a.status(200)
                    expect(res.text).to.equal('API is Alive!');
                    done()
                })
        })
    })
}


describe('TESTING API ALIVE ROUTES!', () => {
    testNonExistingRoute()
    testNonExistingRouteExpect()
    testExistingRoutes()
})