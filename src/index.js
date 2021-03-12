// eslint-disable-next-line no-undef
const express = require('express')
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()

app.get('/',(req,res)=>{
    res.send('homepage.html')
    })

app.listen(app_port)
console.log('app is runninng. port: ${app_port}')
console.log('http://127.0.0.1:${app_port}/')
