import React from 'react';
import headshot from './headshot.small.jpg';
import './Head.css';
import linkedIn from './linkedIn-white.png';
import gitHub from "./gitHub-white.png";
import cvThumb from "./cvThumb.png"
import cv from "./cv.pdf"



class Head extends React.Component {
    render(){
        return(
            <div className ="profile">
                
                
                
              
                <div className ="info">
                    <h1 className = "large-print">Samuel &nbsp; Smock</h1>
                    <p className = "description">Geospatial Data Analyst | Renewable Energy Professional | Student of Sustainability </p>
                    
                    <p className='contact'>
                        Contact: smock.samuel@gmail.com
                    </p>
                    <div className = 'social-links'>
                        <a href= "https://www.linkedin.com/in/samuel-chuck-smock-502a5a76" target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
                                <img src={linkedIn} alt ='' />
                        </a>
                          
                        <a href= "https://github.com/samuelsmock" target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
                            <img src={gitHub}  alt =''/>
                        </a>    
                        <a href= {cv} target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
                            <img src={cvThumb}  alt =''/>
                        </a>    
                    </div>  
                    <div className = "smallItalic">This website is part of ongoing practice and experimentation with responsive web design in React, JavaScript, and GitHub</div>
                </div>
                <div className= "center-the-damn-thing">
                    <img id = 'headshot' src = {headshot} alt = 'profile pic'/>
                </div>    
                
            </div>
        );
    };
}

export default Head;