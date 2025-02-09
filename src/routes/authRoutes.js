const express = require('express')
const router = express.Router()
const TestSignUp = require('../controllers/TestSignUp')

router.post("/testSignUp",TestSignUp)


module.exports = router