//Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledCarousel from '../Carousel/StyledCarousel';
import MenuContainer from '../menu-container/MenuContainer';
import './index.css';

function Header() {
  return (
    <div className="header">    
      <div className="content">
        <MenuContainer/>
        <StyledCarousel />
      </div>
      <div className="text-container">
        <p style={{ fontSize: "0.5rem", color: "#FFFFFF", textShadow: '0px 0px 4px #000000', letterSpacing: '3px' }}>DESIGN AND ORDER YOUR NEW KITCHEN TODAY</p>
        <p>Bespoke & made to measure handmade kitchen design</p>
        <p className="link"><NavLink activeClassName="selected" className="nav-link-header" to="/shop">ORDER NOW</NavLink></p>
      </div>
      </div>
  );
}

export default Header;
