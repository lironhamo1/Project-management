//db.js

//URL containing user and password
const url = "mongodb+srv://our-user28:12GoTravel34@cluster0.ofal3.mongodb.net/usersDB?retryWrites=true&w=majority";

// eslint-disable-next-line no-undef
var mongoose = require('mongodb').MongoClient;
mongoose.connect(url, function(err, db) {
    if (err) throw err;
    //Choosing DB
    var dbo = db.db("sample_analytics");

    //Extracting data from accounts collection
    // eslint-disable-next-line no-unused-vars
    dbo.collection("accounts").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
