import React from 'react';
import FlipMove from 'react-flip-move';
import { Link, withRouter } from 'react-router-dom';
import './MobileMenu.css';



class MobileMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                 {
                     path: '/me',
                     id: 1,
                     text: "About",
                     
                 },
                 {
                     path: '/education',
                     id: 2,
                     text: "Education",
                   
                 },
                 {
                     path: '/work',
                     id: 3,
                     text: 'Work',
                     
                 },
                 {
                     path: '/projects',
                     id: 4,
                     text: 'Projects',
                    
                 }
             ]
 
         }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.history.push(event);
        
        let clickItem = event.target.innerHTML;
        let newList = this.state.items;
        let index; 
        for(const elem of newList){
            if(elem.text === clickItem)
                {index = newList.indexOf(elem);}
        }
        let elemToAdd = newList.splice(index, 1);
        newList.unshift(elemToAdd[0]);
        this.setState({items: newList});
    }

    render(){
        return (
         
        <div className = "mobileBar" >
              
           
            <FlipMove duration ="1200ms" easing = "ease-in-out" className = "mobileOptions" typeName ="ul">
                {this.state.items.map(item => (
                    <li
                        key={item.path}
                        onClick={this.handleClick}
                        className={
                            this.props.location.pathname === item.path
                                ? 'mobile_item_active'
                                : 'mobile_item_unactive'
                        }
                    >
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                ))}
            </FlipMove>  
           
             
        </div>
        
        );
    }
}


export default withRouter(MobileMenu);