var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;
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


//read the data
app.get('/student', function(req, res) {


    // var response = {
    //     name:req.query.name,
    //     username:req.query.username,
    //     password:req.query.password,
    //     address:req.query.address
    // };
    // console.log(response);




    // User.find({}, function(err, users){
    //     if(err) throw err;
    //     res.send(JSON.parse(JSON.stringify(users)));
    //     res.end();
    //
    // });

//find

//If query IS passed into .find(), filters by the query parameters
    User.find({}, function (err, people) {
        if (err) {
            res.status(500).send(err)
        } else {
            // send the list of all people in database with name of "John James" and age of 36
            // Very possible this will be an array with just one Person object in it.
            res.send(people);
            console.log(people);
        }
    });


// find one

    // User.findOne(
    //     {"name": "Mukesh-dude", "username": "Jain"},  // query
    //     {"name": true, "owner": true},  // Only return an object with the "name" and "owner" fields. "_id" is included by default, so you'll need to remove it if you don't want it.
    //     function (err, kitten) {
    //         if (err) {
    //             res.send(err)
    //         }
    //         if (kitten) {  // Search could come back empty, so we should protect against sending nothing back
    //             res.send(kitten);
    //             console.log(kitten);
    //         } else {  // In case no kitten was found with the given query
    //             res.send("No kitten found")
    //         }
    //     }
    // );





});

app.get('/student/id/:id', function(req, res) {


//find by Id

    // Common RESTful way to get the Id is from the url params in req.params

    User.findById(req.params.id, function (err, kitten) {
        if (err) {
            res.send(err)
        }
        if (kitten) {
            res.send(kitten)
        } else {
            res.send("No kitten found with that ID")
        }
    });
});



//write the data
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
    res.send(user)
    res.end();
});

//Update the data
app.put('/student/id/:id', function(req, res){


        User.findById(req.params.id , function(err, user) {
            if (err) {
                res.status(500).send(err);
                console.log("error");
            } else {
                console.log("success");
                // Update each attribute with any possible attribute that may have been submitted in the body of the request
                // If that attribute isn't in the request body, default back to whatever it was before.
                user.name = req.body.user.name;
                user.username =req.body.user.username;
                user.password = req.body.user.password;
                user.address = req.body.user.address;

                // Save the updated document back to the database
                user.save(function (err, user) {
                    if (err) {
                        res.status(500).send(err);
                        console.log("error");
                    }
                    else {
                        res.send(user);
                        console.log(user.id);
                    }
                });
            }
        });



});

//delete the data

app.delete('/student/id/:id', function(req, res){

    User.findByIdAndRemove(req.params.id, function (err, id) {
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        var response = {
            message: "Todo successfully deleted",
            id: id._id
        };
        res.send(response);
    });
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



var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

});

// This responds a GET request for abcd, abxcd, ab123cd, and so on

