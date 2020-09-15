import React from 'react';




class Education extends React.Component {
  render() {
    return (
    <div>
        <h2>Education</h2>
        <p>
          <strong>Building Front-End Applications with React,</strong> Codecademy 2020 to 2020
          <br/>A course covering the foundations of React, stressing lifecycle methods, and passing information between components.
        </p>
        <hr/> 
        <p>
          <strong>JavaScript Bootcamp,</strong> Operation Spark 2020 to 2020
          <br/> Coding bootcamp focused on JavaScript and functional programming.
        </p>
        <hr/>  
        <p>
          <strong>B.S. Applied Physics,</strong> Columbia University <i>Cum Laude</i>  2009 to 2012
          <ul>
            <li>Python, C, ArcGIS</li>
            <li>Linear Algebra, Partial Differential Equations, Statistics</li>
          </ul> 
        </p>

    </div>
  );
  }
}

export default Education;
