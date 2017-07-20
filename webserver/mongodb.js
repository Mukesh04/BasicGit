var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var mongo = require('mongodb');
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db){

    //database created
    if(err) throw err;
    console.log("Database Created");

    //create table
    db.createCollection('student', function(err, res){
        if(err) throw err;
        console.log("Table is created");
        db.close();
    });

    //row created
    var myObj= new User({
        username : response.username,
        password : response.password,
        address : response.address
    });
    db.collection('student').insertOne(myObj, function(err, res){
       if(err) throw err;
       console.log("Data Row Is Inserted" + username + password + address);
       db.close();
    });

    //insert many
    var myObj1=[{ name: 'John', address: 'Highway 71'}];
    db.collection('student').insertMany(myObj1, function(err, result){
        if(err) throw err;
        console.log("Number of records inserted: " + result.insertedCount);
        db.close();
    });


    //select from one row
    db.collection('student').findOne({}, function(err, result){
        if(err) throw err;
        console.log("Name : " + " " +result.name + " " + "Address : " +" "+ result.address);
        db.close();
    });

    db.collection("customers").find().limit(500).toArray(function(err, result) {
        if (err) throw err;
        console.log("limit" + result);
        db.close();
    });

    //select from many row
    db.collection('student').find({}).toArray(function(err, result){
        if(err) throw err;
        console.log("Name : " + " " +result.name + " " + "Address : " +" "+ result.address);
        db.close();
    });



    //find Query
    var query = {name:"Chuck"};
    db.collection('student').find(query).toArray(function(err, result){
       if(err) throw err;
       console.log(result);
       db.close();
    });

    //sort
    var mysort = {name: -1};
    db.collection('student').find().sort(mysort).toArray(function(err, result){
        if(err) throw err;
        console.log(result);
        db.close();
    });


   var destroy = {name : "Mukesh"};
   db.collection('student').deleteMany(destroy, function(err, res){
      if(err) throw err;
      console.log(res.result.n + "documents deleted");
       db.close();
   });
});