import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import "./Menu.css";

class Menu extends Component {
    render() {
        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <ul id="flyoutMenu"
                onMouseDown={this.props.handleMouseDown}
                className={visibility}>     
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/">About</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop">Shop</NavLink></p>
                <h1>MHK</h1>
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">Plan your kitchen</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/gallery">Gallery</NavLink></p>
                <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop">My Order</NavLink></p> 
                <span className="grid3">
                <a className="nav-link-header" href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><p><FaIcons.FaFacebookF color={"white"} /></p></a>
                <a className="nav-link-header" href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank"><p><AiIcons.AiOutlineTwitter color={"white"} /></p></a>
                    <a className="nav-link-header" href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><p><FaIcons.FaInstagram color={"white"} /></p></a>
                </span>
            </ul>
        );
    }
}

export default Menu;