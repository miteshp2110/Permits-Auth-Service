const { pool } = require("../../config/db");
const redis = require("../../config/redisClient");
const { getHashedPassword } = require("../../utils/bcryptManager");

const updatePassword = (async(req,res)=>{
    try{
        const {email,otp} = req.body
        if(!email || !otp){
            return res.status(400).json({Message:"Email and OTP not provided"})
        }
        const cache = JSON.parse(await redis.get(`auth:updatePassword:user:${email}`))
        if(cache){
            if(cache.attemptsRemaning > 0){
                const cacheOtp = cache.otp
            }
            else{
                return res.status(429).json({Message:"Too many request , try after some time."})
            }

        }
        else{
            return res.status(400).json({Message:`Request for email : ${email} not found.`})
        }
    }
    catch(err){
        console.error(err)
        return res.status(500).json({Message:"Server Error, try after some time."})
    }
})