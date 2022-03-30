import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const databaseCollection = process.env.MONGODB_COLLECTION

const TodoSchema = new mongoose.Schema({
    name: String,
    todo: String,
    done: false
}, {
    timestamps: true
})

const TodoModel = new mongoose.model('databaseCollection', TodoSchema)

export default TodoModel