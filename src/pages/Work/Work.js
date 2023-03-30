import React from 'react';
import CV from "./cv.pdf"



class Work extends React.Component {
  render() {
    return (
    <div className = "work">
        <br/>
        <p>I am a maker through-and-through, and love to build things from the ground up. Since leaving my role as master brewer, IT person, and overall everything guy 
          at a start-up neighborhood brewery in mid-2019, I have built focussed on improving my skills in geospatial data science, energy analysis and modelling as well as immersed myself in green building practices.
          <br/>
          <br/>
          I am currently looking for employment opportunities either in geospatial data analysis or energy system analysis. CV is available <a href = {CV}  target ="_blank" alt =''  rel="noopener noreferrer">here</a>
        </p>

        <hr/>

        <p>
          <h3 className = 'title'>Owner Operator</h3>
          
          <strong padding-bottom = "5px"> Rebuild Greener!  </strong> New Orleans, LA - 2017 to 2021
          <br/>In this multi-faceted role, I designed and built small houses incorporating passive heating/cooling, heat pumps, spray foam insulation and other green building practices. I also coordinated with city officials on planning and permitting, and coordinated small construction teams on build sites. 
          I also coordinated with customers on a variety of smaller light construction projects.
          <br/><br/>
        <strong>Key Skills:</strong> 3D Design, Carpentry,  Zoning and Code Compliance, Tax Incentive Optimization
        </p>
        <hr/>

        <p>
          <h3 className = 'title'>Operations Manager, Founding Employee </h3>
          
          <strong padding-bottom = "5px">Parleaux Beer Lab, </strong> New Orleans, LA - 2016 to 2019
          <br/>As the first employee, I was responsible for everything from wiring and plumbing new equipment to setting up the website. As the team grew, my role included overseeing production schedules, 
          supervising other production staff, and designing labels in compliance with federal and state regulations.
          <br/><br/>
        <strong>Key Skills:</strong> Process Design, Production Scheduling, Adobe PhotoShop, Wix Web Themes, HTML, Carpentry, Industrial Wiring, Plumbing, and of course Brewing
        </p>
        <hr/>

        <p>
        <h3 className = 'title'>Founder</h3> 
          <strong padding-bottom = "5px">Chuck Burns and Ty Tone, </strong> New Orleans, LA - 2014 to 2016
          <br/>What began as a band turned into a touring and music production company as other bands began to use us for tour booking, help with promotion,
          and as producers. Among the many hats I wore in this two-person company was audio engineer, video editor, tour booker, graphic designer, and web designer.
        <br/><br/>
        <strong>Key Skills:</strong> ProTools, Adobe Photoshop, FinalCut, Media Campaigns
        </p>
        <hr/>  
        <p>
        <h3 className = 'title'>GIS Analyst</h3> 
         
          <strong>Beak Consultants, GmBH, </strong>  Freiberg, Germany- 2012 to 2013
          <br/>Utilized a machine learning ArcGIS plugin written in Python to produce predictive maps of a variety of geographic and environemntal data. Also wrote code in Python 
          and SQL to rautomate analysis workflows on raw data sets. I also translated project proposals and communication from English to Spanish for Central American clients.
        </p>
        
        <strong>Key Skills:</strong> ArcGIS, Python, SQL, Written Spanish 
        

    </div>
  );
  }
}

export default Work;
