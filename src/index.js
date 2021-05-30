/*global require,__dirname,*/
/*eslint no-undef: "error"*/

const express = require('express')
var bodyParser = require('body-parser')
var ObjectID = require('mongodb').ObjectID;
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
let PathDi=path.join(__dirname, '../');
const fullPathviews=path.join(PathDi,'/views');
const fullPathimages=path.join(fullPathviews,'/images');
const fullPathCss=path.join(PathDi,'/public/css');
const fullPathJs=path.join(PathDi,'/public/js');
app.set('views',path.join(__dirname,'../','views'));
app.get('/',(req,res)=>{
    res.render( 'Home')
})

/////q&a page
app.get('/qa.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/qa.css'))
})
app.get('/qa.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/qa.js'))
})
app.get('/qa',(req,res)=>{
    res.render('qa')
})


/////registration page
app.get('/registration.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/registration.css'))
})
app.get('/registration.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/registration.js'))
})
app.get('/registration',(req,res)=>{
    res.render('registration')
})

app.get('/liron.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/liron.png'))
})
app.get('/ohad.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/ohad.png'))
})
app.get('/daniel.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/daniel.png'))
})
app.get('/einav.png',(req,res)=> {
    res.sendFile(path.join(fullPathimages + '/einav.png'))
})

/////login page
    app.get('/login.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/login.css'))
    })
    app.get('/login.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/login.js'))
    })
    app.get('/login', (req, res) => {
        res.render('login')
    })

    app.get('/signup', (req, res) => {
        res.render('signup')
    })

    app.get('/changePassword.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'changePassword.css'))
    })
    app.get('/changePassword.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'changePassword.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/changePassword', (req, res) => {
        res.render('changePassword')
    })
    app.get('/recommendedPackages.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'recommendedPackages.css'))
    })
    app.get('/recommendedPackages.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'recommendedPackages.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/recommendedPackages', (req, res) => {
        res.render('recommendedPackages')
    })

    app.get('/AgentPersonalPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'AgentPersonalPage.css'))
    })
    app.get('/AgentPersonalPage.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'AgentPersonalPage.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/AgentPersonalPage', (req, res) => {
        res.render('AgentPersonalPage')
    })

    app.get('/costOrders.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'costOrders.css'))
    })
    app.get('/costOrders.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'costOrders.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/costOrders', (req, res) => {
        res.render('costOrders')
    })
    app.get('/costumerPersonalPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'costumerPersonalPage.css'))
    })
    app.get('/costumerPersonalPage.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'costumerPersonalPage.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/costumerPersonalPage', (req, res) => {
        res.render('costumerPersonalPage')
    })
    app.get('/LondonOT.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'LondonOT.css'))
    })
    app.get('/LondonOT.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'LondonOT.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/LondonOT', (req, res) => {
        res.render('LondonOT')
    })

    app.get('/UsOT.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'UsOT.css'))
    })
    app.get('/UsOT.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'UsOT.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/UsOT', (req, res) => {
        res.render('UsOT')
    })

    app.get('/orderInfo.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'orderInfo.css'))
    })
    app.get('/orderInfo.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'orderInfo.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/orderInfo', (req, res) => {
        res.render('orderInfo')
    })

    app.get('/orderInfo.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'orderInfo.css'))
    })
    app.get('/orderInfo.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'orderInfo.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/orderInfo', (req, res) => {
        res.render('orderInfo')
    })

    app.get('/OrganizedTrip.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'OrganizedTrip.css'))
    })
    app.get('/OrganizedTrip.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'OrganizedTrip.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/OrganizedTrip', (req, res) => {
        res.render('OrganizedTrip')
    })

    app.get('/TripRegistrationform.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'TripRegistrationform.css'))
    })
    app.get('/TripRegistrationform.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'TripRegistrationform.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/TripRegistrationform', (req, res) => {
        res.render('TripRegistrationform')
    })

    app.get('/wishlist.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'wishlist.css'))
    })
    app.get('/wishlist.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'wishlist.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/wishlist', (req, res) => {
        res.render('wishlist')
    })

    app.get('/newsAgent.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'newsAgent.css'))
    })
    app.get('/newsAgent.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'newsAgent.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/newsAgent', (req, res) => {
        res.render('newsAgent')
    })
    app.get('/packageManagementPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'packageManagementPage.css'))
    })
    app.get('/packageManagementPage.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'packageManagementPage.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/packageManagementPage', (req, res) => {
        res.render('packageManagementPage')
    })

    app.get('/packageManagementPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'packageManagementPage.css'))
    })


    app.get('/showRegistrations.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'showRegistrations.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/showRegistrations', (req, res) => {
        res.render('showRegistrations')
    })

    app.get('/showRegistrations.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'showRegistrations.css'))
    })

    app.get('/Home.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'Home.css'))
    })
    app.get('/Home.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'Home.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/Home', (req, res) => {
        res.render('Home')
    })


    app.get('/img2.jpg', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/img2.jpg'))
    })
    app.get('/img1.jpg', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/img1.jpg'))
    })
    app.get('/BRC.jpg', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/BRC.jpg'))
    })
    app.get('/Australia.jpg', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/Australia.jpg'))
    })
    app.get('/ell.jpg', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/ell.jpg'))
    })

    app.get('/logo.png', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/logo.png'))
    })
    app.get('/p.png', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/p.png'))
    })
    app.get('/p_n.png', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/p_n.png'))
    })

    app.get('/p_p.png', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/p_p.png'))
    })
    app.get('/m.jpg', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/p_p.png'))
    })



    app.get('/p_o.png', (req, res) => {
        res.sendFile(path.join(fullPathimages + '/p_o.png'))
    })

/////AboutUs page
    app.get('/Aboutus.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/Aboutus.css'))
    })
    app.get('/Aboutus.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/Aboutus.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/Aboutus', (req, res) => {
        res.render('Aboutus')
    })

/////q&a page
    app.get('/q&a.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/q&a.css'))
    })
    app.get('/q&a.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/q&a.js'))
    })
    app.get('/q&a', (req, res) => {
        res.render('q&a')
    })

/////registration page
    app.get('/registration.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/registration.css'))
        res.render('login')
    })

    app.get('/registration.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/registration.js'))
    })
    app.get('/registration', (req, res) => {
        res.render('registration')
    })

/////contactus page
    app.get('/contactus.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/contactus.css'))
    })
    app.get('/contactus.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/contactus.js'))
    })
    app.get('/contactus', (req, res) => {
        res.render('contactus')
    })
//Orders management page
    app.get('/OrdersManagementPage', (req, res) => {
        res.render('OrdersManagementPage')
    })
    app.get('/OrdersManagementPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/OrdersManagementPage.css'))
    })
    app.get('/OrdersManagementPage.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/OrdersManagementPage.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
//Paying for package page
    app.get('/PaymentPage', (req, res) => {
        res.render('PaymentPage')
    })

app.get('/readFile', async (req, res) => {
    //let fileContent ;
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function(err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");

        //Extracting data from accounts collection
        // eslint-disable-next-line no-unused-vars
        dbo.collection('Orders').find({}).toArray(function(err, result) {
            temp=true
            //res.render('OrdersManagementPage',{temp: true})
            if (err) throw err;
            db.close();
        });
    });

});

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
            });
        });
    });
    app.post("/loginin", (req, res) => {
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            //Choosing DB
            var dbo = db.db("GoTravel");


            //Extracting data from accounts collection
            // eslint-disable-next-line no-unused-vars
            dbo.collection('accounts').find({}).toArray(function (err, result) {
                //
                return res.status(200).json({
                    ok: true,
                    data: result
                });
            });
        });
    });
    app.post("/cu", (req, res) => {
        console.log(req.body)
        console.log(res)
    });
    app.post("/insertAccount", (req, res) => {
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;

            var dbo = db.db("GoTravel");

            dbo.collection('accounts').find({"email": req.body['email']}).toArray(function (err, result) {

                var myUser = result;
                if (myUser.length == 0) {
                    dbo.collection('accounts').insertOne(req.body);


                }


            });

        });
        console.log(res)
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
            });
        });
    });


    app.post("/wishlist", (req, res) => {
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("GoTravel");
            //Extracting data from accounts collection
            // eslint-disable-next-line no-unused-vars
            dbo.collection('Package management').find({}).toArray(function (err, result) {
                return res.status(200).json({
                    ok: true,
                    data: result
                });
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
            var myquery = {email: req.body.mail};
            var newvalues = {$set: {password: req.body.newPass}};
            dbo.collection("accounts").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
            });
        });
    });

    app.post("/updatePacakgeRate", (req, res) => {
        console.log(req.body)
        res.send("test")
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            //Choosing DB
            var dbo = db.db("GoTravel");
            var myquery = {serial: req.body.serial};
            var newvalues = {$set: {rate: req.body.rate}};
            dbo.collection("Package management").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
            });
        });
    });
    app.get('/instagram.png',(req,res)=> {
        res.sendFile(path.join(fullPathimages + '/instagram.png'))
    })
    app.get('/facebook.png',(req,res)=> {
        res.sendFile(path.join(fullPathimages + '/facebook.png'))
    })
    app.get('/Whatsapp.png',(req,res)=> {
        res.sendFile(path.join(fullPathimages + '/Whatsapp.png'))
    })


app.get('/newsAgent.css', (req, res) => {
        res.sendFile(path.join(fullPathCss, 'newsAgent.css'))
    })
    app.get('/newsAgent.js', (req, res) => {
        res.sendFile(path.join(fullPathJs, 'newsAgent.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })
    app.get('/newsAgent', (req, res) => {
        res.render('newsAgent')
    })
    app.get('/PaymentPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/PaymentPage.css'))
    })
    app.get('/PaymentPage.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/PaymentPage.js'))
    })
//Order Display Page
    app.get('/OrderDisplay', (req, res) => {
        res.render('OrderViewingPage')
    })
    app.get('/OrderViewingPage.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/OrderViewingPage.css'))
    })
    app.get('/OrderViewingPage.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/OrderViewingPage.js'))
    })


    app.post("/removePackageDB", (req, res) => {
        console.log(req.body)
        res.send("test")
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            //Choosing DB
            var dbo = db.db("GoTravel");
            var myquery = {serial: req.body.id};
            dbo.collection("Package management").deleteOne(myquery, function (err, obj) {
                if (err) throw err;
                console.log("1 document deleted");
                console.log(obj.result)
                db.close();
            });
        });
    });
    app.post("/broadMessage", (req, res) => {
        res.send("test")
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            //Choosing DB
            var dbo = db.db("GoTravel");
            var myquery = {email: req.body.mail};
            var newvalues = {$push: {messages: req.body.message}};
            dbo.collection("accounts").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
            });
        });
    });
    app.get('/broadMessageAgent', (req, res) => {
        res.render('broadMessageAgent')
    })
    app.get('/broadMessageAgent.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/broadMessageAgent.css'))
    })
    app.get('/broadMessageAgent.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/broadMessageAgent.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })


    app.get('/broadMessageClient', (req, res) => {
        res.render('broadMessageClient')
    })
    app.get('/broadMessageClient.css', (req, res) => {
        res.sendFile(path.join(fullPathCss + '/broadMessageClient.css'))
    })
    app.get('/broadMessageClient.js', (req, res) => {
        res.sendFile(path.join(fullPathJs + '/broadMessageClient.js'))
        //res.render(path.join('/OrdersManagementPage'))
    })


    app.post("/wishListUP", (req, res) => {
        console.log(req.body)
        res.send("test")
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            //Choosing DB
            var dbo = db.db("GoTravel");
            var myquery = {email: req.body.mail};
            var newvalues = {$set: {wishlist: req.body.wishlist}};
            dbo.collection("accounts").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
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
            var myquery = {location: req.body.loc};
            var newvalues = {$push: {register: req.body.mail}};
            dbo.collection("Organized Trip").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
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
            var myquery = {serial: req.body['serial']};
            var newvalues = {
                $set: {
                    locations: req.body['locations'],
                    area: req.body['area'],
                    trip_start: req.body['trip_start'],
                    trip_end: req.body['trip_end'],
                    cost: req.body['cost'],
                    travelsNum: req.body['travelsNum'],
                    packages_left: req.body['packages_left'],
                    hotel: req.body['hotel'],
                    purchased: req.body['purchased'],
                    star: req.body['star'],
                    flight: req.body['flight'],
                    info: req.body['info'],
                    about: req.body['about'],
                    img: req.body['img']
                }
            };
            dbo.collection("Package management").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log(req.body)
                console.log("1 document updated");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
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

            dbo.collection("Package management").insertOne(req.body, function (err, res) {
                if (err) throw err;
                console.log("1 document added");
                //Extracting data from accounts collection
                // eslint-disable-next-line no-unused-vars
                db.close();
                console.log(res)
            });
        });
        console.log(res)
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
            });
        });
    });

    app.post("/UpdateAllOrderStatus", (req, res) => {
        var i;
        if (req.body.data === undefined)
            return -1;
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;
            //Choosing DB
            var dbo = db.db("GoTravel");
            for (i = 0; i < req.body.data.length; i++) {
                var objectid = new ObjectID(req.body.data[i][1].toString());
                var myquery = {_id: objectid};
                var newvalues = {$set: {Status: req.body.data[i][0]}};
                dbo.collection("Orders").updateOne(myquery, newvalues, function (err, res) {
                    if (err) throw err;
                    console.log("1 document updated");
                    console.log(res)
                    //Extracting data from accounts collection
                });
            }
            // eslint-disable-next-line no-unused-vars
            db.close();
        });
        res.end("yes");
    });

app.post("/InsertRowToOrders", (req, res) => {
    console.log(req.body)
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;
        //Choosing DB
        var dbo = db.db("GoTravel");
        dbo.collection('Package management').find({serial: req.body.pid}).toArray(function (err, result) {
            var numleft = result.packages_left;
            var thepackage = result[0];
            if (numleft === 0) {
                res.send('/Pay?error=1')
            }
            if (numleft === 0) {
                //Cant buy package ,none left.
            }
            var myquery = {serial:  req.body.pid};
            var newvalues = {$set: {packages_left: numleft - 1}};
            dbo.collection("Package management").updateOne(myquery, newvalues, function (err, res) {
                if (err) throw err;
                console.log("1 document updated");
                console.log(res);
            });
            var obj = {
                Status: "Approved",
                Dates: thepackage.trip_start + thepackage.trip_end,
                Destination: thepackage.locations,
                'User Name': req.body.firstname,
                'Last Name': req.body.lastname,
                Email: req.body.email,
                Phone: req.body.phone,
                UID: req.body.uid,
                CCD: req.body.ccd,
                LTD: req.body.ltd,
                Expiration: req.body.expdate,
                Price: thepackage.cost,
                TravelsNum: thepackage.travelsNum,
                'Package Type': thepackage.packageType
            }
            dbo.collection('Orders').insertOne(obj);

        });
    });


    res.end("Payed successfully");
});



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
            });
        });
    });

    app.post("/insertAccount", (req, res) => {
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;

            var dbo = db.db("GoTravel");

            dbo.collection('accounts').find({"email": req.body['email']}).toArray(function (err, result) {

                var myUser = result;
                if (myUser.length == 0) {
                    dbo.collection('accounts').insertOne(req.body)

                }


            });
        });
        console.log(res)
    });


    app.post("/LoadPackageUserIfno", (req, res) => {
        var packageid = new ObjectID(req.body.pid.toString());
        const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
        var mongoose = require('mongodb').MongoClient;
        mongoose.connect(url, function (err, db) {
            if (err) throw err;

            var dbo = db.db("GoTravel");

            //Extracting data from account and orders collections
            dbo.collection('Orders').find({"_id": packageid}).toArray(function (err, result) {
                return res.status(200).json({
                    ok: true,
                    data: {
                        "package": result
                    }
                });
            });
        });
    });


    app.post("/home", (req, res) => {
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
            });
        });
    });
    app.listen(app_port, () => {
        console.log('app is runninng. port: ' + app_port);
        console.log('http://127.0.0.1:' + app_port + "/");
    });

