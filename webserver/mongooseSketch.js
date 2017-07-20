var mongoose = require ('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mydb');
var Schema = mongoose.Schema;

//schema
    var userSchema = new Schema({
        name:String,
        username: {type:String, required:true, unique: true },
        password: {type:String, required:true },
        admin : Boolean,
        location :String,
        meta:{
            age: Number,
            website: String
        },
        created_at:Date,
        updated_at:Date
    });

    //METHODS

    userSchema.methods.dudify = function() {
        // add some stuff to the users name
        this.name = this.name + '-dude';

        return this.name;

    };


    //model
    var user = mongoose.model('User', userSchema);

    module.exports = user;

