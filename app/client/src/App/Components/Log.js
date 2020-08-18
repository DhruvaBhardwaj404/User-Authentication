import React from 'react';
import info from './info.js';
//import cookie from 'react-cookies';


async function Log(username,password) {
    const data={
        username,
        password
    }
    const headers={
        "Content-Type":"application/json",
        "Accept":"application/json",
    }
     var result= await fetch('https://localhost:8000/auth',{
        method:'POST',
        headers,
        body:JSON.stringify({query:data})
    
    })

     if(await result.status===200){
         info.logStatus=true;
         var parsedDat= await result.json();
         info.data=await parsedDat.body;
         return true;
     }
     else{
         //console.log(result.status)
         return false;
        }
    
}

export default Log;
