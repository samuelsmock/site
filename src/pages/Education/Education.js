import React from 'react';




class Education extends React.Component {
  render() {
    return (
    <div>
      
      <h3>For Credit/Degree Programs</h3>
      <p>
          <strong>M.Sc. Joint International Masters in Sustainable Development,</strong> Univerität Leipzig and Ca'Foscari University Venice   Expected 2023
          <ul className = "not-bold">
            <li>Environmental and Climate Economics | Integrated Assessment of Climate Protection Strategies</li>
            <li>Sustainability Assesment of the "Energiewende" | Renewable Energy Sources</li>
          </ul> 
        </p>
        
        <p>
          <strong>B.S. Applied Physics,</strong> Columbia University <i>Cum Laude</i>  2009 to 2012
          <ul className = "not-bold">
            <li>Physics of Solar Energy | GIS for Infrastructure and Environmental Management</li>
            <li>Field Methods for Environmental Engineers | Introduction to Atmospheric Science</li>
            <li>Linear Algebra | Partial Differential Equations | Statistics</li>
          </ul> 
        </p>
      <h3>Independent/Online Study</h3>

       
        <p>
          <strong>Building Front-End Applications with React,</strong> Codecademy - 2020
          <br/>A course covering the foundations of React, stressing lifecycle methods, and passing information between components.
        </p>
        <hr/> 
        <p>
          <strong>JavaScript Bootcamp,</strong> Operation Spark - 2020
          <br/> Coding bootcamp focused on JavaScript and functional programming.
        </p>
        <hr/>
        <p>
          <strong>GIS Specialization</strong> UC Davis Extension via Coursera - 2019
          <br/> A four course in-depth dive on geospatial analysis, database management, remote sensing, and process automation. 
          Coursework completed using ArcGIS software by Esri.
    
        </p>
        <hr/>  
       

    </div>
  );
  }
}

export default Education;
