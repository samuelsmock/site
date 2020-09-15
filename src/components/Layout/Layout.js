import React from 'react';

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import Work from '../../pages/Work/Work';
import Projects from '../../pages/Projects/Projects';
import Education from '../../pages/Education/Education';
import Me from '../../pages/Me/Me';
import './Layout.css';

class Layout extends React.Component {
    render (){
        return(
          
           <div className = "app-content">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/me" />
                    </Route>
                    <Route path = "/me" component ={Me} />
                    <Route path = "/work" component = {Work} />
                    <Route path = "/projects" component = {Projects} />
                    <Route path = "/education" component = {Education} />
                </Switch>
            </div> 
                  
        )
    }
          

}

export default Layout;