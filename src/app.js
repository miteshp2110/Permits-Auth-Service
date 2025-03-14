const express = require("express")
const app = express()
const {XCEPTIONS_KEY} = require("./config/secrets")
const {testConnection} = require('./config/db')
const {Client} = require("xceptions")
const status = require('express-status-monitor')
const jsonBodyValidator = require("./middlewares/jsonBodyValidator")
const redis = require("./config/redisClient")

testConnection()

app.use(status())
app.use(jsonBodyValidator)
app.use(express.json())

redis.set("greetings","Hello")
redis.expire("greetings",30)


app.use("/auth",require('./routes/auth-routes/auth'))


const xceptionClient = new Client(XCEPTIONS_KEY);

xceptionClient.connect()
    .then((fielder) => {
        console.log("Connected to Xceptions");

        app.use((err, req, res, next) => {
            fielder.field(err, req, res, next);
        });
    })
    .catch((err) => {
        console.error("Error connecting to Xceptions:", err);
    });

module.exports = app