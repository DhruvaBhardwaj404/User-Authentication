import React,{useState} from 'react';
import regSer from './regSer.js';
import {Redirect} from 'react-router-dom'

function Register() {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [age,setAge]=useState('');
    const [gender, setGender] = useState('');
    const [password,setPassword]= useState('');
    const [message,setMessage]=useState((<div> </div>));
 
    async function regCon(event){
        event.preventDefault();
        const query={
            username,
            name,
            age,
            gender,
            password,
        }
     var response= await regSer(query);
     console.log(response);
     if(response===true){
         setMessage((
         <div className="alert-success w-50">
         <center>
         Registered!
         </center>
         </div>
     ))
     }
     else{
        setMessage((
        <div className="alert-danger w-50">
        <center>
        Error occurred! Try different username!
        </center>
        </div>
        ))
     }
        
    }
    

    return (
        <div className='container bg-light border shadow p-5'>
            <br/><br/><br/>
          <center>
             <form className='form-group' onSubmit={regCon} >
             <label htmlFor="usrna">Username :</label>
             <input className='form-control w-50' id='usrna' type="text" pattern='.{5,15}' required title='Should be atleast 5 characters long (max 15)' value={username} onChange={e=>setUsername(e.target.value)}/>
             <br/>
             <label htmlFor="">Name :</label>
             <input className='form-control w-50' id='name' type="text" pattern='.{5,20}' required title='Should be atleast 5 characters long (max 15)' value={name} onChange={e=>setName(e.target.value)}/>
             <br/>
             <div required title='Must Select One!!'>
             Select Gender :<br/>
             <input type="radio" id='Male' value='Male' name='gender'  required checked={gender==='Male'} onChange={e=>setGender(e.target.value)}/>     Male <br/>
             <input type="radio" id='Female' value='Female' name='gender' checked={gender==='Female'} onChange={e=>setGender(e.target.value)}/>    Female <br/>
             <input type="radio" id='Other' value='Others' name='gender' checked={gender==='Others'} onChange={e=>setGender(e.target.value)}/>    Other<br/>
             </div>
             <br/>
             <label htmlFor="age">Age :</label>
             <input className='form-control w-50' type="number" id="age" pattern='.{1,2}' min='0' value={age} onChange={e=>setAge(e.target.value)}/>
             <br/>
             <label htmlFor="pss">Password :</label>
             <input className='form-control w-50' type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
             <br/>
             <button className='form-control w-25 btn-primary'  type='submit'>Submit</button>
            </form>  
         <br/>
         {message} 
         </center>
     
        </div>
    )
}

export default Register;
