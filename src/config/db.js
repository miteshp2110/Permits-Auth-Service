const mongoose = require('mongoose')
const {MONGO_URI} = require('./secrets')


async function connectDB(){
    try{

        await mongoose.connect(MONGO_URI)
        console.log("Connected to Mongoose")
    }
    catch(exception){
        console.error(exception)
        process.exit(1)
    }
}

module.exports = {connectDB}
