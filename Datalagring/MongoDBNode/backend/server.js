import {MongoClient} from "mongodb"

const url = "mongodb://localhost:27017"
const client = new MongoClient(url);

const dbName = "actors"
const colName = "roles"
let collection = null

async function connect() {
    await client.connect() // Kopplar till server
    let database = client.db(dbName) // Hämtar databas
    collection = database.collection(colName) // Hämta collection
}

async function insertOne(jsonDocument) {

    await connect();
    try {
        // Lagra dokument i databasen
        const exists = await collection.findOne(jsonDocument)
        if (exists == null) {
            const result = await collection.insertOne(jsonDocument)
            console.log(`Document was created with ID ${result.insertedId}`)
            return result;
        }
    } catch (error) {
        // Woops!
        console.log(`Error: ${error}`)
    } finally {
        // Koppla ner från databasen
        await client.close()
    }
}

await insertOne({name: "Adam West", role: "Batman"});
await insertOne({name: "Michael Keaton", role: "Batman"});
await insertOne({name: "Michael Keaton", role: "Beetlejuice"});
await insertOne({name: "Ben Affleck", role: "Batman"});
await insertOne({name: "Ryan Reynolds", role: "Deadpool"});
await insertOne({name: "Ryan Reynolds", role: "Deadpool"});


//Read
async function findOne(jsonDocument) {

    await connect();
    try {
        // Lagra dokumentet i databasen
        const result = await collection.findOne(jsonDocument);
        console.log(result)
        return result;
    } catch
        (error) {
        // Woops!
        console.log(`Error: ${error}`)
    } finally {
        // Koppla ner från databasen
        await client.close()
    }
}

await insertOne({name: "Adam West", role: "Batman"});
await insertOne({name: "Michael Keaton", role: "Batman"});
await insertOne({name: "Michael Keaton", role: "Beetlejuice"});
await insertOne({name: "Ben Affleck", role: "Batman"});
await insertOne({name: "Ryan Reynolds", role: "Deadpool"});
await insertOne({name: "Ryan Reynolds", role: "Deadpool"});

await findOne({name: "Ben Affleck"});
await findOne({role: "Beetlejuice"});
await findOne({
    name: {
        $regex: "Ben"
    }
})


async function deleteOne(jsonDocument) {

    await connect()
    try {
        // Tar bort dokumentet i databasen
        await collection.deleteOne(jsonDocument)
        console.log(`Document was deleted`)
    } catch
        (error) {
        // Woops!
        console.log(`Error: ${error}`)
    } finally {
        // Koppla ner från databasen
        await client.close()
    }
}


async function updateOne(filter, update) {
    await connect()

    try {
        await collection.updateOne(filter, update)
        console.log('Updated document')
    } catch (error) {
        console.log(`Ooops: ${error}`)
    } finally {
        await client.close()
    }
}

async function getAll(filter=null, sort ={name:1}) {
    await connect()
    try {
        const result = await collection.find({filter}).sort(sort).toArray()
        console.log(result);
        return result;
    } catch (error) {
        console.log(`Le horrible error: ${error}`)
    } finally {
        await client.close()
    }
}


await deleteOne({role: "Beetlejuice"});
await findOne({role: "Beetlejuice"});

await updateOne({name: "Adam West"}, {$set: {role: "Classic Batman"}})
await findOne({name: "Adam West"})
console.log('------------------------------')
await getAll({role: "Batman"}, {name:-1})