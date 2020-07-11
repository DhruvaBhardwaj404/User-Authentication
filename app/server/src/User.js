const mongoose = require('mongoose');
const {Schema}= require('mongoose')

const User= new Schema({
    username:String,
    password:String,
    name:String,
    gender:String,
    age:String,  
})

module.exports= mongoose.model('User',User,'User');
