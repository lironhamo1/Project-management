// eslint-disable-next-line no-undef
const express = require('express')
//var router=express.Router();
// eslint-disable-next-line no-undef
const app_port = process.env.PORT || 3000
const app = express()
app.set('view engine','ejs')
app.use(express.json());
var bodyParser=require('body-parser');
// eslint-disable-next-line no-undef
var path = require('path');
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'../','views'));
var temp;
// eslint-disable-next-line no-undef
const fullPath=__dirname
let PathDi=path.join(__dirname, '../');
const fullPathviews=path.join(PathDi,'/views');
const fullPathimages=path.join(fullPathviews,'/images');
const fullPathCss=path.join(PathDi,'/public/css');
const fullPathJs=path.join(PathDi,'/public/js');



app.get('/liron.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/liron.png'))
})
app.get('/ohad.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/ohad.png'))
})
app.get('/p_n.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p_n.png'))
})
app.get('/p_o.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p_o.png'))
})
app.get('/daniel.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/daniel.png'))
})
app.get('/einav.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/einav.png'))
})
app.get('/logo.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/logo.png'))
})
app.get('/p_p.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p_p.png'))
})
app.get('/p.png',(req,res)=>{
    res.sendFile(path.join(fullPathimages + '/p.png'))
})


/////AboutUs page
app.get('/Aboutus.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/Aboutus.css'))
})
app.get('/Aboutus.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/Aboutus.js'))
    //res.render(path.join('/OrdersManagementPage'))
})
app.get('/Aboutus',(req,res)=>{
    res.render( 'Aboutus')
})

/////q&a page
app.get('/q&a.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/q&a.css'))
})
app.get('/q&a.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/q&a.js'))
})
app.get('/q&a',(req,res)=>{
    res.render('q&a')
})


/////login page
app.get('/login.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/login.css'))
})
app.get('/login.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/login.js'))
})
app.get('/login',(req,res)=>{
    res.render('login')
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


/////contactus page
app.get('/contactus.css',(req,res)=>{
    res.sendFile(path.join(fullPathCss + '/contactus.css'))
})
app.get('/contactus.js',(req,res)=>{
    res.sendFile(path.join(fullPathJs + '/contactus.js'))
})
app.get('/contactus',(req,res)=>{
    res.render('contactus')
})



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
            if (err) throw err;
            db.close();
        });
    });
});

app.post("/cu",(req,res)=>{console.log(req.body)});
app.post("/insertAccount",(req,res)=>{
    const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";
    var mongoose = require('mongodb').MongoClient;
    mongoose.connect(url, function (err, db) {
        if (err) throw err;

        var dbo = db.db("GoTravel");

        dbo.collection('accounts').find({"email": req.body['email']}).toArray(function (err, result) {

            var myUser = result;
            if( myUser.length ==0){
                dbo.collection('accounts').insertOne(req.body)

            }


        });

    });
});

app.listen(app_port, () => {
    console.log('app is runninng. port: '+app_port);
    console.log('http://127.0.0.1:'+app_port+"/");
});

