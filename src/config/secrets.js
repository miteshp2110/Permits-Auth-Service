const dotenv = require('dotenv')
dotenv.config()

module.exports={
    PORT : process.env.PORT,
    XCEPTIONS_KEY : process.env.XCEPTIONS_KEY,
    MONGO_URI : process.env.MONGO_URI
}