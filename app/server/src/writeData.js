const mongoose = require('mongoose');
const User =require('./User.js');


async function writeData(data){
    try{
    if(await User.exists({username:data.username})){
        return {message:'Username Taken'};
    }    
    const res= await User.create(data);
    //console.log(res);
    //const put=await User.findOne(data);
   // console.log(put);
    return true
    }
    catch(err){
        console.log(err)
         return false;
    }
}

module.exports ={writeData}