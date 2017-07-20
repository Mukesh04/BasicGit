var User =require('./formexpress.js');

var obj= new User({
    name : "Mukesh",
    username : 'Jainvsd57',
    password : 'MyWish'
});


obj.dudify(function(err, name){
    if(err) throw err;
    console.log("Your name is : " + name);
});


obj.save(function(err, obj){
    if(err) throw err;

    console.log("User Saved Sucessfully" + obj);
});

