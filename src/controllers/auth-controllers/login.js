const {pool} = require('../../config/db')
const redis = require('../../config/redisClient')
const {checkPassword} = require('../../utils/bcryptManager')
const { getJwtToken } = require('../../utils/jwtManager')

const login = (async(req,res,next)=>{
    try{
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({Message:"Email And Password not provided"})
        }

        const data = await pool.query("select password from users where email = ?",[email])
        
        
        if(data[0].length==0){
            return res.status(401).json({Message:"Email Not Found"})
        }
        else{
            const cache = JSON.parse(await redis.get(`auth:login:user:${email}`))

            if(cache){
                if(cache.attemptsRemaining > 0){
                    const data = {
                        email:email,
                        attemptsRemaining:cache.attemptsRemaining-1
                    }
                    await redis.set(`auth:login:user:${email}`,JSON.stringify(data),'EX',300)
                }
                else{
                    return res.status(429).json({"Message":"Too many requests, try again in 5 minuts."})
                }
    
            }
            else{
                var newCache = {
                    email: email,
                    attemptsRemaining:2
                }
                await redis.set(`auth:login:user:${email}`,JSON.stringify(newCache),'EX',300)
            }
            if(await checkPassword(password, data[0][0].password)){
                const payload = {
                    email:email,
                    role : 'student'
                }
                return res.status(200).json({Message:"Success",jwt:getJwtToken(payload)})
            }
            else{
                return res.status(401).json({Message:"Wrong Password"})
            }
        }
    }
    catch(err){
        console.error(err)
        next(err)
        return res.status(500).json({Message:"Some Error Occured in Server"})
    }
})

module.exports=login