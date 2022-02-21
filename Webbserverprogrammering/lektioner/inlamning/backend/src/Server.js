import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const port = process.env.SERVER_PORT
const cors_option = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}

const app = express()

app.use(cors(cors_option))
app.use(express.json())

const hej = [
    {
        id: 'one',
        toDo: 'Handla',
        name: 'Michaela'
    },
    {
        id: 'two',
        toDo: 'Hämta barn',
        name: 'Filip',
    }
]

const getUserByName = (id) => {
    let object = `Could not find "${id}" in database`
    hej.forEach(user => {
        if (id === user.id)
        {
            object = user
        }
    })
    return object
}

app.get('/', (req, res) => {
    res.send('Api is Alive')
})

app.get('/fruit', (req, res) => {
    res.send([hej])
})

app.get('/user/:name', (req, res) => {
    const name = req.params.name
    const responseFromDb = getUserByName(name)
    res.send(responseFromDb)
})

app.listen(port, () => {
    console.log(`Server running on address:port http://localhost:${port}`)
})