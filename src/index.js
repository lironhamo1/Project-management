const express = require('express')
const app_port = process.env.PORT || 3000
const app = express()

app.get('/',(req,res)=>{
    res.send('hell world')
    })

app.listen(app_port)
console.log('app is runninng. port: ${app_port}')
console.log('http://127.0.0.1:${app_port}/')