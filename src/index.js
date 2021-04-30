// eslint-disable-next-line no-undef
const express = require('express')
var bodyParser = require('body-parser')
ObjectID = require('mongodb').ObjectID;

//var router=express.Router();
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()
app.set('view engine','ejs')
app.use(express.json())
// eslint-disable-next-line no-undef
var path = require('path');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views',path.join(__dirname,'../','views'));

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
app.get('/OrdersManagementPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/OrdersManagementPage.css'))
})
app.get('/OrdersManagementPage.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/OrdersManagementPage.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/Pay',(req,res)=>{
    res.render('PaymentPage')
})
app.get('/PaymentPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/PaymentPage.css'))
})
app.get('/PaymentPage.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/PaymentPage.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/logo.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/logo.png'))
})
app.get('/p.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p.png'))
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


app.post("/LoadAllFromOrders", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    console.log(req.body)
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

app.post("/UpdateAllOrderStatus",(req,res)=>{
    var i;
    console.log("IT ISSSSSS:",req.body.data);
    if(req.body.data===undefined)
        return -1;
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        for(i=0;i<req.body.data.length;i++) {
            var objectid=new ObjectID(req.body.data[i][1].toString())
            var myquery = {_id: objectid};
            var newvalues = {$set: {Status: req.body.data[i][0]}};
            dbo.collection("Orders").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                //Extracting data from accounts collection
            });
        }
    // eslint-disable-next-line no-unused-vars
    db.close();
});
});

app.post("/InsertRowToOrders",(req,res)=>{
    console.log("IT ISSSSSS:",req.body)
});
app.listen(app_port, () => {
    console.log('app is runninng. port: '+app_port);
    console.log('http://127.0.0.1:'+app_port+"/");
});

