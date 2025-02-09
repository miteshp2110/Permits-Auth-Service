const app = require('./src/app')
const {PORT} = require('./src/config/secrets')

app.listen(PORT,()=>{
    console.log(`Running on ${PORT}`)
})