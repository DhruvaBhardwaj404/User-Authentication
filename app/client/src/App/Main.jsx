import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Login from './Components/Login.jsx';
import Content from './Components/Content.jsx';
import Register from './Components/Register.jsx';

function Main() {
        return (
            <section className="bg-dark container-md p-3 scroll-spy">
                  <Switch>
                      <Redirect exact from='/' to='/login' />
                      <Route exact path='/login' component={Login}/>
                      <Route exact path='/content' component={Content}/>
                      <Route exact path='/register' component={Register}/>
                  </Switch>
                  <br /><br />
            </section>
        )
    }


export default Main
