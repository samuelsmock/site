import React from 'react';

import {
  BrowserRouter as Router,
  
 
} from "react-router-dom";


import './App.css';
import Menu from '../MenuBar/Menu';
import Head from '../Head/Head';
import Layout from "../Layout/Layout";
import DropDown from '../DropDown/DropDown';


class App extends React.Component {
  render() {
    return (
    <body>
      
      <Router basename ='' >
        <div className="all-contents">
          <div className = "dropDown"><DropDown/></div>
          <nav className = "left-sidebar">
              <Menu />
              
          </nav>
          <div className = "right-column">
            <div className = "top">
              <Head/>
            </div>
            <div className = "page">
              <Layout/>
            </div>  
          </div>  
          <footer> </footer>                                                                                          
            
            
          
          
        </div>
      </Router>
    </body>
    
  );
  }
}

export default App;
