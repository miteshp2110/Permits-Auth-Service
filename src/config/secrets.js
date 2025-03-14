const dotenv = require('dotenv')
dotenv.config()

module.exports={
    PORT : process.env.PORT,
    XCEPTIONS_KEY : process.env.XCEPTIONS_KEY,
    MYSQL_HOST : process.env.MYSQL_HOST,
    MYSQL_PORT : process.env.MYSQL_PORT,
    MYSQL_USER : process.env.MYSQL_USER,
    MYSQL_PASSWORD : process.env.MYSQL_PASSWORD,
    MYSQL_LIMIT : process.env.MYSQL_LIMIT,
    MYSQL_DATABASE : process.env.MYSQL_DATABASE,
    BCRYPT_SALT_ROUNDS : process.env.BCRYPT_SALT_ROUNDS,
    JWT_SECRET : process.env.JWT_SECRET,
    REDIS_HOST : process.env.REDIS_HOST,
    REDIS_PORT : process.env.REDIS_PORT,
    REDIS_USER : process.env.REDIS_USER,
    REDIS_PASSWORD : process.env.REDIS_PASSWORD
}