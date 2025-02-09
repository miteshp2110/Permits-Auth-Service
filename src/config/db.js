const {MongoClient} = require('mongodb')
const {MONGO_URI} = require('./secrets')

var connection;

async function getConnection(){
    try{

        if(connection){
            return connection
        }
        connection = await (new MongoClient(MONGO_URI)).connect()
        console.log("Connected to MongoDb")
        return connection
    }
    catch(exception){
        console.error(exception)
        
    }
}

module.exports = {getConnection}
