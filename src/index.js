// eslint-disable-next-line no-undef
const express = require('express')
//var router=express.Router();
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()
app.set('view engine','ejs')
// eslint-disable-next-line no-undef
var path = require('path');
app.set('views',path.join(__dirname,'../','views'));
var temp;
// eslint-disable-next-line no-undef
const fullPath=__dirname
let PathDi=path.join(__dirname, '../');
const fullPathviews=path.join(PathDi,'/views');
const fullPathimages=path.join(fullPathviews,'/images');
const fullPathCss=path.join(PathDi,'/public/css');
const fullPathJs=path.join(PathDi,'/public/js');


app.get('/',(req,res)=>{
    res.sendFile(path.join(fullPath + '/homePage.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(fullPath + '/login.html'))
})
app.get('/signup',(req,res)=>{
    res.sendFile(path.join(fullPath + '/Signup.html'))
})

app.get('/OrdersM',(req,res)=>{
    res.render('OrdersManagementPage')
})
app.get('/logo.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/logo.png'))
})
app.get('/p.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p.png'))
})
app.get('/OrdersManagementPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/OrdersManagementPage.css'))
})
app.get('/OrdersManagementPage.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/OrdersManagementPage.js'))
    //res.render(path.join('/OrdersManagementPage'))
})

// app.get('/readFile', async (req, res) => {
//     //let fileContent ;
//     const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
//     var mongoose = require('mongodb').MongoClient;
//     mongoose.connect(url, function(err, db) {
//         if (err) throw err;
//         //Choosing DB
//         var dbo = db.db("GoTravel");
//
//         //Extracting data from accounts collection
//         // eslint-disable-next-line no-unused-vars
//         dbo.collection('Orders').find({}).toArray(function(err, result) {
//             temp=true
//             //res.render('OrdersManagementPage',{temp: true})
//             if (err) throw err;
//             db.close();
//         });
//     });
//
// });


app.post("/dani", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('Orders').find({}).toArray(function (err, result) {
            //
            return res.status(200).json({
                ok: true,
                data: result
            });
            if (err) throw err;
            db.close();
        });
    });
});

app.listen(app_port, () => {
    console.log('app is runninng. port: '+app_port);
    console.log('http://127.0.0.1:'+app_port+"/");
});

