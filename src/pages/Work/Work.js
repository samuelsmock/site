import React from 'react';
import CV from "./smock.cv.12.2023.pdf"



class Work extends React.Component {
  render() {
    return (
    <div className = "work">
        <br/>
        <p>I am a maker through-and-through, and love to build things from the ground up.
          <br/>
          <br/>
          I am currently looking for employment opportunities either in geospatial data analysis or in energy systems. CV is available <a href = {CV}  target ="_blank" alt =''  rel="noopener noreferrer">here</a>
        </p>

        <hr/>
        <p>
        <h3 className = 'title'>Research Assistant</h3> 
          <strong padding-bottom = "5px">German Center for Integrated Biodiversity Research (iDiv)</strong> Leipzig, Germany- 2023 to Present
          <br/>
          <div style= {{paddingLeft: '30px'}}>
            In this role in the Biodiversity Economics working group, I apply tools such as Google Earth Engine to better understand how high nature value places fit within an urban fabric, as well as their relationship with population density and income levels. I also help develop interactive surveys and maps using JavaScript and R's geospatial libraries.
            <br/><br/>
            <strong>Key Skills:</strong> Google Earth Engine, Survey Builders (eg. Lime Survey / Survey Engine), JavaScript (jQuery), QGIS
          </div>
        
        
        </p>

        <hr/>
        <p>
          <h3 className = 'title'>Owner, Operator </h3>
          
          <strong padding-bottom = "5px">Rebuild Greener! </strong> New Orleans, LA - 2017 to 2021
          <br/>
          
          <div style= {{paddingLeft: '30px'}}> 
          My activities in the role were multifaceted and included whole home renovations, work with insulation and building envelope,outdoor lifestyle projects, and even entire tiny home construction projects from foundation to finishing work. Over the years I installed heat pumps, small solar PV systems, and worked with permitting and safety offices.
          <br/><br/>
          <strong>Key Skills:</strong> Light carpentry and Construction. Residential Wiring, Plumbing, HVAC, Construction Plan Drafting and Design
          </div>

          <br/>
        
        </p>
        <hr/>
        <p>
          <h3 className = 'title'>Operations Manager, Founding Employee </h3>
          
          <strong padding-bottom = "5px">Parleaux Beer Lab, </strong> New Orleans, LA - 2016 to 2019
          <br/>
          
          <div style= {{paddingLeft: '30px'}}> 
          As the first employee, I was an integral part of the buildout including the industrial process design and the mechanical layout including the glycol chiller, reverse osmosis system, and gas and electrical heating systems. As the team grew, my role included overseeing production schedules, supervising other production staff, and designing labels in compliance with federal and state regulations.
          <br/><br/>
          <strong>Key Skills:</strong> Industrial Process Design, Refrigeration System , Carpentry, Plumbing, and Electric, Adobe PhotoShop, and (of course) Brewing
          </div>

          <br/>
        
        </p>
        <hr/>
        <p>
        <h3 className = 'title'>GIS Analyst</h3> 
         
          <strong>Beak Consultants, GmBH, </strong>  Freiberg, Germany- 2012 to 2013
          <div style= {{paddingLeft: '30px'}}> 
          Utilized a machine learning ArcGIS plugin written in Python to produce predictive maps of a variety of geographic and environemntal data. Also wrote code in Python 
          and SQL to rautomate analysis workflows on raw data sets. I also translated project proposals and communication from English to Spanish for Central American clients.
          <br/><br/>
          <strong>Key Skills:</strong> ArcGIS, Python, SQL, Written Spanish 
          <br/>
          </div>
        </p>
        
        
        

    </div>
  );
  }
}

export default Work;
