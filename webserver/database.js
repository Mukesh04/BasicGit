var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){
    //row created
    var myObj ={name: "Mukesh Jain", address:"Kasthuri Nagar"};
    db.collection('student').insertOne(myObj, function(err, res){
        if(err) throw err;
        console.log("Data Row Is Inserted");
        db.close();
    });
});