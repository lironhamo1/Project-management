// eslint-disable-next-line no-undef
const express = require('express')
var router=express.Router();
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

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e', {useNewUrlParser: true, useUnifiedTopology: true});
var Schema=mongoose.Schema;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connect!!good for you!!")
    var mys=new Schema({name:String , age:String});
    var usermodel=mongoose.model("e",mys);
    usermodel.find({},function(err,result){
        console.log(result);
    })
});


mongoose.connect('mongodb://localhost:27017/e', {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});