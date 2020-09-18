import React from 'react';
import headshot from './linkedIn-white.png';
import './Head.css';
import linkedIn from './linkedIn-white.png';
import gitHub from "./gitHub-white.png";





class Head extends React.Component {
    render(){
        return(
            <div className ="profile">
                <div className ="opacityBox">
                </div>
                
                <img id = 'headshot' src = {headshot} alt = 'profile pic'/>
              
                <div className ="info">
                    <h1>Samuel Smock</h1>
                    <p>Front-end web developer in New Orleans, LA</p>
                    <div className='contact'>
                        Contact: smock.samuel@gmail.com
                    </div>
                    <div className = 'social-links'>
                        <a href= "https://www.linkedin.com/in/samuel-chuck-smock-502a5a76" target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
                                <img src={linkedIn} width="30" height="30" alt ='' />
                        </a>
                          
                        <a href= "https://github.com/samuelsmock" target ="_blank" alt ='' className ='social-icon' rel="noopener noreferrer">
                            <img src={gitHub} width="30" height="30" alt =''/>
                        </a>    
                    </div>
                   
                </div>    
            </div>
        );
    };
}

export default Head;