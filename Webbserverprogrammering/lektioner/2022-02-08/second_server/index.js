import express, {response} from 'express'

const port = 3001
const app = express()

app.get('/', (req, res) => {
    response.send('API Alive')
})

app.listen(port, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
})