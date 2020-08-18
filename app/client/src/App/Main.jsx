import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Login from './Components/Login.jsx';
import Content from './Components/Content.jsx';
import Register from './Components/Register.jsx';
import NotFound from './Components/NotFound.jsx';

function Main() {
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
