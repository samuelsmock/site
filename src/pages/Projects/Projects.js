import React from 'react';
import ravenous from "./ravenous_thumb.jpg";
import soften from "./soften-screenshot.jpg"

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <hr/>
        
          <a href= "https://softenbodywork.com/" target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
            <img src={soften} width="300" height ="auto" alt ='' className = "thumb"/>
          </a>
          <p>
            One-page website for a masseuse made with react. Makes use of media queries for responsive display, and a stateful menu component to reorder the page options to the active page.
          </p>
        <hr/>
        
          <a href= "https://samuelsmock.github.io/ravenous_testsite/" target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
            <img src={ravenous} width="300" height ="auto" alt ='' className = "thumb"/>
          </a>
          <p>A simple react app making a call to Yelp's Fusion API, displaying results based on sort options selected by the user. Built as part of the 
            Building Front-end Apps with React course by Codecademy.
          </p>
        <hr/>
      </div> 
   
  );
  }
}

export default Projects;
