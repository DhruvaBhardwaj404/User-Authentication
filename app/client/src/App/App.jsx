import 'babel-polyfill'
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom' 

import Head from './Head.jsx';
import NavOption from './NavOption.jsx'
import Main from './Main.jsx'
import Footer from './Footer.jsx'


class App extends Component {
  render() {
    return (
      <Router>
        <div className='bg-dark p-3'>
        <div className="fixed-top p-3">
          <Head />
          <NavOption />
        </div>
          <br/><br/><br/><br/><br/><br/><br/><br/>
          <div>
              <Main />
          </div>
          <div>
              <Footer />
          </div>
        </div>
         </Router>
    );
  }
}

export default App;