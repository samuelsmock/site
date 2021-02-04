import React from 'react';




class Work extends React.Component {
  render() {
    return (
    <div className = "work">
        <h3 className = "mobile-hide">Work</h3>
        <p>I am a maker through-and-through, and love to build things from the ground up. Since leaving my role as master brewer, IT person, and overall everything guy 
          at a start-up neighborhood brewery in mid-2019, I have built a house in my backyard, and taught myself JavaScript and React.
        </p>

        <hr/>

        <p>
          <h3 className = 'title'>Master Brewer, Founding Employee </h3>
          
          <strong padding-bottom = "5px">Parleaux Beer Lab, </strong> New Orleans, LA - 2016 to 2019
          <br/>As the first employee, I was responsible for everything from wiring and plumbing new equipment to setting up the website. As the team grew, my role included overseeing production schedules, 
          supervising other production staff, and designing labels in compliance with federal and state regulations.
          <br/><br/>
        <strong>Key Skills:</strong> Adobe PhotoShop, Wix Web Themes, HTML, Carpentry, Industrial Wiring, Plumbing, and of course Brewing
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
