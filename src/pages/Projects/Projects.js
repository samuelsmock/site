import React from 'react';
import ravenous from "./ravenous_thumb.jpg";
import soften from "./soften-screenshot.jpg"

class Projects extends React.Component {
  render() {
    return (
      <div className= "column">
          <a href= "https://softenbodywork.com/" target ="_blank" alt =''  rel="noopener noreferrer" className = "thumb-container">
            <img src={soften}  alt ='' className = "thumb"/>
          </a>
          <p>
            A one-page website for a masseuse made with react. Makes use of media queries for responsive display, and a stateful menu component to reorder the page options to the active page.
          </p>
          <div><hr/></div> 
        
          <a href= "https://samuelsmock.github.io/ravenous_testsite/" target ="_blank" alt =''  rel="noopener noreferrer" className = "thumb-container">
            <img src={ravenous} alt ='' className = "thumb"/>
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
