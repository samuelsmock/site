import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MenuBar.css';





class MenuBar extends React.Component {
    
    menuOptions = ["Me", "Projects", "Work", "Education"];

    
      
      renderMenuBar() {
        return this.menuOptions.map(menuOption => {
         
          return (<li className = "menuBarListItems">
                    <Link to="/{menuOption}">
                      {menuOption}
                    </Link>
                 </li>);
        });
      }

    
    render(){
        return(
            
                  <ul className = "menu">
                      {this.renderMenuBar()}
                  </ul>   
                
        );
    };
}

export default withRouter(MenuBar);