import React from 'react';
import FlipMove from 'react-flip-move';
import { Link, withRouter } from 'react-router-dom';
import './MenuBar.css';



class Menu extends React.Component{
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
         
        <div className = "menuBar">
            <div className = "menuOptions">
            <ul >
                <FlipMove duration = "1000ms">   
                {this.state.items.map(item => (
                    <li
                        key={item.path}
                        onClick={this.handleClick}
                        className={
                            this.props.location.pathname === item.path
                                ? 'menu_item_active'
                                : 'menu_item'
                        }
                    >
                        <Link to={item.path}>{item.text}</Link>
                    </li>
                ))}
                </FlipMove>
            </ul>
            </div>
        </div>
        
        );
    }
}


export default withRouter(Menu);