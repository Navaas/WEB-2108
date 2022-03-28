import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
    try {
        const DB_URL = process.env.DATABASE_URL
        await mongoose.connect(DB_URL)
        console.log('SUCESSFULLY CONNECTED TO THE DATABSE!')
    } catch (error) {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
        process.exit()
    }
}

const connectToPort = (app) => {
    const port = process.env.PORT
    app.listen(3001, () => {
        console.log(`Servern is running on port ${port}`)
    })
}


export default {
    connectToDatabase,
    connectToPort,
}