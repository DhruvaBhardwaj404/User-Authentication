import React, { Component } from 'react';
import Log from './Log.js';
import { LinkContainer } from 'react-router-bootstrap';
import info from './info.js';
import logOut from './logOut.js'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                loggedIn:info.logStatus,
                username:'',
                password:'', 
                button:'btn btn-primary',
                message:''
            }
    this.userHandler=this.userHandler.bind(this);
    this.passHandler=this.passHandler.bind(this);
    this.submitHandler=this.submitHandler.bind(this);
    this.logOutHandler=this.logOutHandler.bind(this);
    
}

    userHandler(event){
        this.setState({username:event.target.value});
    }

    passHandler(event){
        this.setState({password:event.target.value});
    }
    
    
    
    async submitHandler(event){
        event.preventDefault();
       var result= await Log(this.state.username,this.state.password);
       //console.log('result',result)
       if(result===true){
           this.setState({button:'btn btn-success',loggedIn:true})
           const mes=(
               <div className='alert alert-success w-50 align-item-center'>     
                 Logged In!
              </div>
              
           )
           this.setState({message:mes})
       }
       else{
           this.setState({button:'btn btn-danger'})
           const mes=(
            <div className='alert alert-danger w-50 align-item-center'>     
              Username or Password Incorrect!
           </div>
        )
        this.setState({message:mes})
        }
     }
 
     async logOutHandler(){
         info.logStatus=false;
         info.data={};
         this.setState({loggedIn:false})
         await logOut();
     }


     componentWillUpdate(){
         if(this.state.loggedIn!==info.logStatus){
             this.setState({loggedIn:info.logStatus});
         }
     }
    

    render() {
        if(this.state.loggedIn){
          return(
          <div className="container-fluid bg-light">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <center>    
          <div className='alert alert-success w-50 p-5'>     
             <center>
             You are Already Logged In!
             </center>
         </div>
         <center>
             <button className='btn btn-primary m-25' onClick={this.logOutHandler}>Log out</button>
         </center>
         </center>
         <br />
         <br />
         <br />
         <br />
         <br />
         </div>
          )
        }
        else{
        return (
            <div className='bg-light p-5 container-lg  align-item-center'>
                <br />
                <br />
                <center>
                <form  onSubmit={this.submitHandler} className=' form-group container-sm bg-light border w-50 p-3 shadow '  >
                    <label htmlFor='usr'> Username </label>
                    <input  className='form-control ' id='usr' type='text' value={this.state.username} onChange={this.userHandler}></input><br/>
                    <label htmlFor='pss'>Password </label>
                    <input className='form-control' type="password" id='pss' value={this.state.password} onChange={this.passHandler}></input><br/>
                    <button type='submit'  className={this.state.button}>Submit</button>
                </form>
                {this.state.message}
                </center>
                <center>
               <LinkContainer to='/register'>
               <button className='btn btn-light shadow'>Register</button>
               </LinkContainer>
               </center>
            </div>
        )
    }
}
}

export default Login
