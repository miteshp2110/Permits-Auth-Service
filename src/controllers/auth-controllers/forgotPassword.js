const redis = require('../../config/redisClient')
const getOtp = require('../../utils/otpManager')
const forgotPassword = (async(req,res)=>{
    try{

        const {email}= req.body
        if(!email){
            return res.status(400).json({Message:"Email not provided"})
        }
        const cache = JSON.parse(await redis.get(`auth:forgotPassword:user:${email}`))

        if(cache){
            if(cache.attemptsRemaining > 0){
                
                let newCache = {
                    email:email,
                    otp:getOtp(),
                    attemptsRemaining:0
                }
                await redis.set(`auth:forgotPassword:user:${email}`,JSON.stringify(newCache),'EX',60)

                return res.status(200).json({Message:`OTP sent to ${email}`})
            }
            else{
                return res.status(429).json({Message:"Try again in 1 minute."})
            }
        }
        else{
            let newCache = {
                email:email,
                otp:getOtp(),
                attemptsRemaining:0
            }
            await redis.set(`auth:forgotPassword:user:${email}`,JSON.stringify(newCache),'EX',60)

            return res.status(200).json({Message:`OTP sent to ${email}`})

        }

    }
    catch(err){
        console.error(err)
        return res.status(500).json({Message:"Internal Server Error, Try after some time."})
    }
})

module.exports = forgotPassword