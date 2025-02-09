const express = require("express")
const app = express()
const {XCEPTIONS_KEY} = require("./config/secrets")
const {getConnection} = require('./config/db')


getConnection()
app.use(express.json())

const {Client} = require("xceptions")
const xceptionClient = new Client(XCEPTIONS_KEY)



xceptionClient.connect().then((fielder)=>{
    console.log("Connected to Xceptions")
    app.use((err,req,res,next)=>{
        fielder.field(err,req,res,next)
    })
})
.catch((err)=>{
    console.log("Error connection to Xceptions: ",err)
})


module.exports = app