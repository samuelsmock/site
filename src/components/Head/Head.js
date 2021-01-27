import React from 'react';
import headshot from './headshot.small.jpg';
import './Head.css';
import linkedIn from './linkedIn-white.png';
import gitHub from "./gitHub-white.png";





class Head extends React.Component {
    render(){
        return(
            <div className ="profile">
                
                
                <img id = 'headshot' src = {headshot} alt = 'profile pic'/>
              
                <div className ="info">
                    <h1 className = "large-print">Samuel Smock</h1>
                    <p>Front-end web developer in New Orleans, LA</p>
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
                    </div>
                   
                </div>    
            </div>
        );
    };
}

export default Head;