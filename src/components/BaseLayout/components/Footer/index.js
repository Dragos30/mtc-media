//Dependencies
import React from 'react';
//Internals
import './index.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer>
    <div className="footer">
      <h1 id="company2">MHK</h1>
      <span className="line"></span>
      <span className="grid">
        <h3>About</h3>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/">SHOP</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop">PLAN MY KITCHEN</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">ABOUT US</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">GALERRY</NavLink></p>
      </span>
      <span className="grid">
        <h3>Service</h3>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/">FAQ</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop">CONTACT</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">HOW TO BUY</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">DOWNLOADS</NavLink></p>
      </span>
      <span className="grid">
        <h3>Info</h3>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/">DELIVERY</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/shop">TERMS</NavLink></p>
        <p><NavLink activeClassName="selected" className="nav-link-header" to="/plan">PRIVACY</NavLink></p>
      </span>
      <span className="grid">
        <h3>Follow</h3> 
        <span className="grid3">
          <p className="social"><FaIcons.FaFacebookF /></p>
          <p className="social"><AiIcons.AiOutlineTwitter /></p>
          <p className="social"><FaIcons.FaInstagram /></p>
        </span>   
      </span>   
      <p id="company"> Copyright &copy; Online MTC Home Kitchens 2018 -<br></br>
         All rights reserved.<br></br> Responsive website design, Development & Hosting by mtc.</p>
      
    </div>
    <span className="line"></span>
  </footer>
)

export default Footer;
