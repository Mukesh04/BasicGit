var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
mongoose.Promise = require('bluebird');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//to consume json
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydb');
var Schema = mongoose.Schema;



//schema
var userSchema = new Schema({
    name:String,
    username: {type:String, required:true, unique: true },
    password: {type:String, required:true },
    address:String
});

//METHODS

//model
var User = mongoose.model('User', userSchema);

console.log(__dirname + '/../../student');
app.use('/',express.static(__dirname + '/../public'));

app.get('/student', function(req, res) {
    var response = {
        name:req.query.name,
        username:req.query.username,
        password:req.query.password,
        address:req.query.address
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/student', function(req, res) {

    var user = new User();
    user.name = req.body.user.name;
    user.username = req.body.user.username;
    user.password = req.body.user.password;
    user.address = req.body.user.address;
    user.save(function(err){
        if(err) throw err;
        console.log("uploaded Sucessfully...");
    });
    console.log(user);
    res.end(user);
});



userSchema.methods.dudify = function() {
    // add some stuff to the users name
    this.name = this.name + '-dude';

    return this.name;

};



/*var myObj= new User({
    username : response.username,
    password : response.password,
    address : response.address
});*/
/*db.collection('student').insertOne(myObj, function(err, res){
    if(err) throw err;
    console.log("Data Row Is Inserted" + username + password + address);
    db.close();
});*/



var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});

// This responds a GET request for abcd, abxcd, ab123cd, and so on

