import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const databaseCollection = process.env.MONGODB_COLLECTION

const TodoSchema = new mongoose.Schema({
    Name: String,
    Todo: String,
    Done: false
}, {
    timestamps: true
})

const TodoModel = new mongoose.model(databaseCollection, TodoSchema)

export default TodoModel