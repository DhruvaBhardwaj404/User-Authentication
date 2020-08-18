import info from './info.js'
import axios from 'axios';

async function verify() {

    const result=await axios({
        url:"https://localhost:8000/verify",
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
    })
    
    if(result.data.data==='Not Logged In!'){
        return false
    }
    else {
        //console.log("here")
        info.logStatus=true;
        info.data=result.data.data;
        //console.log(info.data)
        return true;
    }
   
     
}

export default verify;
