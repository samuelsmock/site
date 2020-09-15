import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MenuBar.css';

const items = [
    {
        path: '/me',
        text: 'ME'
    },
    {
        path: '/projects',
        text: 'PROJECTS'
    },
    {
        path: '/work',
        text: 'WORK'
    },
    {
        path: '/education',
        text: "EDUCATION"
    }
];

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.history.push(event);
    }

    render(){
        return (
        <div className = "menuBar">
            <div className = "menuOptions">
            <ul >
                {items.map(item => (
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
            </ul>
            </div>
        </div>
        );
    }
}


export default withRouter(Menu);