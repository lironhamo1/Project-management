// eslint-disable-next-line no-undef
const express = require('express')
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()
// eslint-disable-next-line no-undef
var path = require('path');

// eslint-disable-next-line no-undef
const fullPath=__dirname
app.get('/',(req,res)=>{
    res.sendFile(path.join(fullPath + '/homePage.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(fullPath + '/login.html'))
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(fullPath + '/Signup.html'))
})


app.listen(app_port, () => {
    console.log('app is runninng. port: '+app_port)
    console.log('http://127.0.0.1:'+app_port+"/")
})


