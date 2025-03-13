const { BCRYPT_SALT_ROUNDS } = require("../config/secrets");
const bcrypt = require("bcrypt")


async function getHashedPassword(rawPassword) {
    try{
        const hashedPassword = await bcrypt.hash(rawPassword,parseInt(BCRYPT_SALT_ROUNDS))
        return hashedPassword
    }
    catch(err){
        console.log(err)
    }
    finally{
        return null
    }
}

async function checkPassword(rawPassword,hashedPassword) {
    try{
        const isSame = await bcrypt.compare(rawPassword,hashedPassword)
        return isSame
    }
    catch(err){
        console.log(err)
    }
    finally{
        return false
    }
}

module.exports = {getHashedPassword,checkPassword}
