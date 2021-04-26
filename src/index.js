// eslint-disable-next-line no-undef
const express = require('express')
//var router=express.Router();
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()
// eslint-disable-next-line no-undef
var path = require('path');

// eslint-disable-next-line no-undef
const fullPath=__dirname
app.get('/',(req,res)=>{
    res.sendFile(path.join(fullPath + '/homePage.ejs'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(fullPath + '/login.ejs'))
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(fullPath + '/Signup.ejs'))
})


app.listen(app_port, () => {
    console.log('app is runninng. port: '+app_port)
    console.log('http://127.0.0.1:'+app_port+"/")
})
/*
// eslint-disable-next-line no-undef
var mongoose = require('mongoose');
git var Schema=mongoose.Schema;
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


//mongoose.connect('mongodb://localhost:27017/e', {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

*/
// eslint-disable-next-line no-undef
var mongoose = require('mongodb').MongoClient;
mongoose.connect('mongodb://localhost:27017/', function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");


    // eslint-disable-next-line no-unused-vars
    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
