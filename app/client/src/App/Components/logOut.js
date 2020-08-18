import info from './info.js'
import axios from 'axios';

async function verify() {

    const result=await axios({
        url:"https://localhost:8000/logout",
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
    })
}

export default verify;
