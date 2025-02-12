const User = require('../models/User')

const Login = (async(req,res)=>{
    const {email,password} = req.body

    if(!email || password){
        return res.status(400).json({message:"Invalid Body"})
    }

    
})