import React, { Component,useState,useEffect} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Login from './Components/Login.jsx';
import Content from './Components/Content.jsx';
import Register from './Components/Register.jsx';
import NotFound from './Components/NotFound.jsx';
import verify from './Components/verify.js';
import info from './Components/info.js';

function Main() {
    
   const [check, setCheck] = useState(false)
   
   async function set(){ 
    await verify();
    if(check!==info.logStatus){
        setCheck(info.logStatus)
    }}
    
   useEffect( () => {
       set();
   }, []);
    return (
            <section style={{height:'100hv'}} className="bg-dark container-md p-3 scroll-spy">
                  <Switch>
                      <Redirect exact from='/' to='/login' />
                      <Route exact path='/login' component={Login}/>
                      <Route exact path='/content' component={Content}/>
                      <Route exact path='/register' component={Register}/>
                      <Route path='*' component={NotFound} />
                  </Switch>
                  <br /><br />
            </section>
        )
    }


export default Main
