// eslint-disable-next-line no-undef
const express = require('express')
//var router=express.Router();
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()
app.set('view engine','ejs')
app.use(express.json())
// eslint-disable-next-line no-undef
var path = require('path');
var temp;
// eslint-disable-next-line no-undef
const fullPath=__dirname
let PathDi=path.join(__dirname, '../');
const fullPathviews=path.join(PathDi,'/views');
const fullPathimages=path.join(fullPathviews,'/images');
const fullPathCss=path.join(PathDi,'/public/css');
const fullPathJs=path.join(PathDi,'/public/js');
app.set('views',path.join(__dirname,'../','views'));
app.get('/',(req,res)=>{
    res.render( 'homePage')
})

app.get('/login',(req,res)=>{
    res.render( 'login')})

app.get('/signup',(req,res)=>{
    res.render( 'signup')})

app.get('/changePassword.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'changePassword.css'))
})
app.get('/changePassword.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'changePassword.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/changePassword',(req,res)=>{
    res.render('changePassword')
})

app.get('/AgentPersonalPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'AgentPersonalPage.css'))
})
app.get('/AgentPersonalPage.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'AgentPersonalPage.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/AgentPersonalPage',(req,res)=>{
    res.render('AgentPersonalPage')
})

app.get('/costOrders.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'costOrders.css'))
})
app.get('/costOrders.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'costOrders.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/costOrders',(req,res)=>{
    res.render('costOrders')
})
app.get('/costumerPersonalPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'costumerPersonalPage.css'))
})
app.get('/costumerPersonalPage.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'costumerPersonalPage.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/costumerPersonalPage',(req,res)=>{
    res.render('costumerPersonalPage')
})
app.get('/LondonOT.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'LondonOT.css'))
})
app.get('/LondonOT.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'LondonOT.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/LondonOT',(req,res)=>{
    res.render('LondonOT')
})

app.get('/UsOT.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'UsOT.css'))
})
app.get('/UsOT.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'UsOT.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/UsOT',(req,res)=>{
    res.render('UsOT')
})

app.get('/orderInfo.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'orderInfo.css'))
})
app.get('/orderInfo.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'orderInfo.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/orderInfo',(req,res)=>{
    res.render('orderInfo')
})

app.get('/orderInfo.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'orderInfo.css'))
})
app.get('/orderInfo.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'orderInfo.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/orderInfo',(req,res)=>{
    res.render('orderInfo')
})

app.get('/OrganizedTrip.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'OrganizedTrip.css'))
})
app.get('/OrganizedTrip.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'OrganizedTrip.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/OrganizedTrip',(req,res)=>{
    res.render('OrganizedTrip')
})

app.get('/TripRegistrationform.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'TripRegistrationform.css'))
})
app.get('/TripRegistrationform.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'TripRegistrationform.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/TripRegistrationform',(req,res)=>{
    res.render('TripRegistrationform')
})

app.get('/wishlist.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'wishlist.css'))
})
app.get('/wishlist.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'wishlist.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/wishlist',(req,res)=>{
    res.render('wishlist')
})

app.get('/newsAgent.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'newsAgent.css'))
})
app.get('/newsAgent.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'newsAgent.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/newsAgent',(req,res)=>{
    res.render('newsAgent')
})
app.get('/packageManagementPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'packageManagementPage.css'))
})
app.get('/packageManagementPage.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'packageManagementPage.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/packageManagementPage',(req,res)=>{
    res.render('packageManagementPage')
})

app.get('/packageManagementPage.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'packageManagementPage.css'))
})


app.get('/showRegistrations.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'showRegistrations.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/showRegistrations',(req,res)=>{
    res.render('showRegistrations')
})

app.get('/showRegistrations.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'showRegistrations.css'))
})

app.get('/Home.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss,'Home.css'))
})
app.get('/Home.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs,'Home.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/Home',(req,res)=>{
    res.render('Home')
})



app.get('/img2.jpg',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/img2.jpg'))
})
app.get('/img1.jpg',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/img1.jpg'))
})


app.get('/logo.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/logo.png'))
})
app.get('/p.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p.png'))
})
app.get('/p_n.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p_n.png'))
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
        dbo.collection('Package management').find({}).toArray(function (err, result) {
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


app.post("/password", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('accounts').find({}).toArray(function (err, result) {
            return res.status(200).json({
                ok: true,
                data: result
            });
            if (err) throw err;
            db.close();
        });
    });
});


app.post("/readReg", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('Organized Trip').find({}).toArray(function (err, result) {
            return res.status(200).json({
                ok: true,
                data: result
            });
            if (err) throw err;
            db.close();
        });
    });
});




app.post("/wishlist", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('Package management').find({}).toArray(function (err, result) {
            return res.status(200).json({
                ok: true,
                data: result
            });
            if (err) throw err;
            db.close();
        });
    });
});


app.post("/update", (req, res) => {
    console.log(req.body)
    res.send("test")
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        var myquery = { email: req.body.mail };
        var newvalues = { $set: {password:  req.body.newPass } };
        dbo.collection("accounts").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
            db.close();
        });
    });
});



app.post("/removePackageDB", (req, res) => {
    console.log(req.body)
    res.send("test")
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        var myquery = { serial: req.body.id };
        dbo.collection("Package management").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            console.log("1 document deleted");
            db.close();
        });
    });
});




app.post("/wishListUP", (req, res) => {
    console.log(req.body)
    res.send("test")
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        var myquery = { email: req.body.mail };
        var newvalues = { $set: {wishlist:  req.body.wishlist } };
        dbo.collection("accounts").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            //Extracting data from accounts collection
            // eslint-disable-next-line no-unused-vars
            db.close();
        });
    });
});

app.post("/writeFile", (req, res) => {
    console.log(req.body)
    res.send("test")
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB

        var dbo = db.db("GoTravel");
        var myquery = { location: req.body.loc };
        var newvalues = { $push: {register: req.body.mail } };
        dbo.collection("Organized Trip").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
            //Extracting data from accounts collection
            // eslint-disable-next-line no-unused-vars
            db.close();
        });
    });
});

app.post("/updateP", (req, res) => {
    res.send("test")
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        console.log(req.body)
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        var myquery = { serial: req.body['serial']};
        var newvalues = { $set: {locations:  req.body['locations'],area:  req.body['area'],
                trip_start:  req.body['trip_start'],trip_end:  req.body['trip_end'] ,cost:  req.body['cost'] ,travelsNum:  req.body['travelsNum'],
                packages_left:  req.body['packages_left'],hotel:  req.body['hotel'],purchased:  req.body['purchased'],star:  req.body['star'],
                flight:  req.body['flight'],info:  req.body['info'],about:  req.body['about'],img:  req.body['img']}};
        dbo.collection("Package management").updateOne(myquery, newvalues, function(err, res) {
            if (err) throw err;
            console.log(req.body)
            console.log("1 document updated");
            //Extracting data from accounts collection
            // eslint-disable-next-line no-unused-vars
            db.close();
        });
    });
});


/*app.post('/password', (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        var myquery = { email: req.body.mail};
        var newvalues = { $set: { password: req.body.newPass } };
        dbo.collection("accounts").updateOne(myquery, newvalues, function (err, res1) {
            if (err) throw err;
            else {
                //alert("password changed successfully!");
                res.redirect("/"); //the response
            }
            console.log("1 document updated");
            db.close();
        });
    });
});*/

app.post("/readOrders", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('Orders').find({}).toArray(function (err, result) {
            return res.status(200).json({
                ok: true,
                data: result
            });
            if (err) throw err;
            db.close();
        });
    });
});




app.post("/addNewPacakage", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        dbo.collection("Package management").insertOne(req.body ,function(err, res) {
            if (err) throw err;
            console.log("1 document added");
            //Extracting data from accounts collection
            // eslint-disable-next-line no-unused-vars
            db.close();
        });
    });
});

app.post("/OrganizedTrip", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('Organized Trip').find({}).toArray(function (err, result) {
            return res.status(200).json({
                ok: true,
                data: result
            });
            if (err) throw err;
            db.close();
        });
    });
});

app.post("/news", (req, res) => {
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('accounts').find({}).toArray(function (err, result) {
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

