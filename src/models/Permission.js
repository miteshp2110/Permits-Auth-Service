const mongoose = require('mongoose')
const {v4:uuidv4} = rqeuire("uuid")

const permissionSchema = new mongoose.Schema({
    pid:{
        type:String,
        required:true,
        unique:true,
        default:uuidv4
    },
    p_description:{
        type:String,
        required : true,
    },
    p_type:{
        type:String,
        required:true
    },
    p_date:{
        type:Date,
        required:true
    },
    p_hours:{
        type:Array,
        required:true,
    },
    p_checked:{
        
    }
})