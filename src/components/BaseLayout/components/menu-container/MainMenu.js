import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import "./MainMenu.css";

class MainMenu extends React.Component {
    render() {
        return (
            <nav>            
                <ul id="main">
                    <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><p><FaIcons.FaFacebookF color={"white"} /></p></a>
                    <a href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank"><p><AiIcons.AiOutlineTwitter color={"white"} /></p></a>
                    <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><p><FaIcons.FaInstagram color={"white"} /></p></a>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/">About</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop">Shop</NavLink></p>
                    <h1>MHK</h1>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">Plan your kitchen</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/gallery">Gallery</NavLink></p>
                    <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop" style={{ border: "1px solid #ffff", borderRadius: "50px", padding: "10px" }}>My Order<AiIcons.AiOutlineShoppingCart /></NavLink></p>
                    <span></span>
                </ul>
            </nav>
        );
    }
}
export default MainMenu;