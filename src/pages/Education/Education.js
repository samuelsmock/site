import React from 'react';
import thesis from "./smockThesis.pdf"



class Education extends React.Component {
  render() {
    return (
    <div>
      
      <h2>For Credit/Degree Programs</h2>
      <hr/><hr/>
      <p>
          <strong>M.Sc. Joint International Masters in Sustainable Development,</strong> University of Leipzig and Ca'Foscari University - 11/2023 <br/>

          <div style= {{paddingLeft: '30px'}}>
            <b>Thesis: </b> 
            <a href = {thesis} target ="_blank" alt =''  rel="noopener noreferrer">
              Quantifying the Value of Residential Heatpump Retrofits to Building Owners: A Geospatial Approach
            </a>
            <br/>
          
            <b>Selected Coursework:  </b>
          <ul className = "not-bold">
            <li>Environmental and Climate Economics | Integrated Assessment of Climate Protection Strategies</li>
            <li>Sustainability Assesment of the "Energiewende" | Renewable Energy Sources</li>
          </ul> 
          </div>
        </p>
        <hr/>
        <p>
          <strong>B.S. Applied Physics,</strong> Columbia University <i>Cum Laude</i> - 05/2012
          <div style= {{paddingLeft: '30px'}}>
            <b>Focus: </b> Atmospheric Dynamics, Sustainable Design
            <br/>
            <b>Selected Coursework: </b>
            <ul className = "not-bold">
              <li>Physics of Solar Energy | GIS for Infrastructure and Environmental Management</li>
              <li>Field Methods for Environmental Engineers | Introduction to Atmospheric Science</li>
              <li>Linear Algebra | Partial Differential Equations | Statistics</li>
            </ul>
          </div>
        </p>
        <br/>

        <hr/> <hr/>
      <h2>Independent/Online Study</h2>
      <hr/> <hr/>
       
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
