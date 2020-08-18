

async function regSer(query) {

    const result= await fetch("https://localhost:8000/reg",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({query})
    })
    
     if(result.body.message==='Registered'){
         return true;
     }
     else {
         return result.body.message;
     }
}

export default regSer;
