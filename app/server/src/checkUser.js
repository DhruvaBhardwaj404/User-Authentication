const mongoose = require('mongoose');
const User =require('./User.js');

async function checkUser(data){
    const ress= await User.exists({username:data.username,password:data.password});
    //console.log(ress)
    if(ress){
        return User.findOne({username:data.username,password:data.password});
    }
    else{
        return null
    }
}


async function getData(username){
    const ress= await User.exists({username});
    //console.log(ress)
    if(ress){
        return User.findOne({username});
    }
    else{
        return null
    }
}

module.exports ={checkUser,getData}