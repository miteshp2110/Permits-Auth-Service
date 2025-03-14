const express = require('express')
const login = require('../../controllers/auth-controllers/login')
const forgotPassword = require('../../controllers/auth-controllers/forgotPassword')
const router = express.Router()

router.post("/login",login)
router.post("/forgotPassword",forgotPassword)

module.exports=router