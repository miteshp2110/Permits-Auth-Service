const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:false
    },
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true,
        enum:["Admin","Student","Dean","HOD","Professor"]
    },
    status:{
        type:Boolean,
        required:true,
        default:true
    },
    cretedAt:{
        type:Date,
        default:Date.now
    }
});

const User = mongoose.model("User",userSchema)
module.exports = User