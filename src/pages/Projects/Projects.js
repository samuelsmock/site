import React from 'react';
import ravenous from "./ravenous_thumb.jpg";
import soften from "./soften-screenshot.jpg"
import bioenergyThumb from "./bioenergyThumb.jpg"
import bioenergy from "./EUROPEAN_FOREST_BIOENERGY_EXCERPT.pdf"
import renenThumb from"./renenThumb.png"
import renen from  "./smock.CM0446.final.pdf"
import thesis from "../Education/smockThesis.pdf"
import flow from "./flowChart.jpg"

class Projects extends React.Component {
  render() {
    return (
      <div className= "column">
        <h2>Projects in Sustainable Development</h2>
        <div><hr/></div> 

        <a href= {thesis}  target ="_blank" alt =''  rel="noopener noreferrer">
          <h3 className = "mobile-hide">Master's Thesis on Geospatial Techno-Economic Modelling of Heat Pump Retrofits</h3>
        </a>
        <a href= {thesis}  target ="_blank" alt =''  rel="noopener noreferrer" className = "thumb-container">
            <img src={flow}  alt ='' className = "thumb"/>
        </a>
            <p>
            The master's research involved building a novel model, written in Python for determining the net present value (NPV) of air-to-water heat pump retrofits on a per building level using building morphology, regional climate, and energy price trajectories as the principal variables.</p> 
            <div><hr/></div> 

        <a href= {renen}  target ="_blank" alt =''  rel="noopener noreferrer">
          <h3 className = "mobile-hide">Design Proposal for an Off-grid Multisource Heat Pump </h3>
        </a>
        <a href= {renen}  target ="_blank" alt =''  rel="noopener noreferrer" className = "thumb-container">
            <img src={renenThumb}  alt ='' className = "thumb"/>
        </a>
            <p>
            Proposal for a climate control system incorporating geothermal, solar thermal and solar PV inputs in an off-grid context. Project focusses on monthly energy balance and heating/cooling load calculations and includes 3D models of the building rendered in SketchUp</p> 
            <div><hr/></div> 


        <a href= {bioenergy}  target ="_blank" alt =''  rel="noopener noreferrer">
          <h3 className = "mobile-hide">European Forests and Bioenergy Production</h3>
        </a>
        <a href= {bioenergy}  target ="_blank" alt =''  rel="noopener noreferrer" className = "thumb-container">
            <img src={bioenergyThumb}  alt ='' className = "thumb"/>
        </a>
            <p>
            Excerpt from a group project in the department of economics at the University of Leipzig focussed on the short and mid-term carbon impacts of forest bioenergy in Europe.
            </p>
            <div><hr/></div> 

        <h3 className = "mobile-hide">Web Development</h3>
          <a href= "./" target ="_blank" alt =''  rel="noopener noreferrer" className = "thumb-container">
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
