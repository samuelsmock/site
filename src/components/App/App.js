import React from 'react';

import {
  BrowserRouter as Router,
 
} from "react-router-dom";

import './App.css';
import Menu from '../MenuBar/Menu';
import Head from '../Head/Head';
import Layout from "../Layout/Layout";



class App extends React.Component {
  render() {
    return (
    <body>
      
      <Router>
        <div className="all-contents">
          <nav>
            <div className = "sidebar">
              <Menu />
            </div>
          </nav>
          <main>                                                                                               
            <Head/>
          
            <div className = "page">
            <Layout/>
            </div>  
            
          </main>
          
        </div>
      </Router>
    </body>
    
  );
  }
}

export default App;
