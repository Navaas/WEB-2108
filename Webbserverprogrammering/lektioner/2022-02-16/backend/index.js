import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.SERVER_PORT

const app = express()

const option = {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE']
}
app.use(cors(option))

app.get('/',(req, res) => {
    res.send('API is Alive')
})

app.post('/name/:input', (req,res) => {
    const input = req.params.input
    res.send(`Your name is: ${input}`)
})

app.post('/calc/add/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let sum = num1 + num2
    res.send(`Summan av talen ${num1} + ${num2} = ${sum}`)
})

app.post('/name/:forname/:lastname', (req, res) => {
    let forname = req.params.forname
    let lastname = req.params.lastname
    res.send(`Mitt namn är: ${forname} ${lastname}`)
})

app.post ('/calc/sub/:num1/:num2', (req,res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let sum = num1 - num2
    res.send(`Summan av talen ${num1} - ${num2} = ${sum}`)
})

app.post ('/calc/multi/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let sum = num1 * num2
    res.send(`Summan av talen ${num1} * ${num2} = ${sum}`)
})

app.post('/calc/div/:num1/:num2', (req, res) => {
    let num1 = Number(req.params.num1)
    let num2 = Number(req.params.num2)
    let sum = num1 / num2
    res.send(`Summan av talen ${num1} / ${num2} = ${sum}`)
})

app.post('/array', (req, res) =>{
    let array = ['Michaela, Christoffer, Aram']
    res.send(`${array}`)
})


app.listen(port)