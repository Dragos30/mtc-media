import React from 'react';
import { NavLink } from 'react-router-dom';
import about from '../BaseLayout/components/Assets/Bitmap-4.png'
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Assets/Bitmap-2.png';
import image2 from '../Assets/Bitmap-3.png';
import image3 from '../Assets/Bitmap.png';
import image4 from '../Assets/Bitmap-1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

function About() {
    return (
        <div id="about">
            <div className="content">
      
                <img className="image" src={about} alt="kitchen" />
          
            <div className="about-container">
                <p className="text1">Quality Craftmanship from build to delivery</p>
                <h3>Discover the beauty of a handmade kitchen</h3>
                <p className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Morbi eget est sit amet sapien venenatis maximus vel in urna.
                Nam mauris arcu, feugiat in finibus vitae, sollicitudin id purus.
                   Ut imperdiet, magna eu pharetra tincidunt, mauris purus ultrices.</p>
                <p className="link"><NavLink activeClassName="selected" className="nav-link-header" to="/about">ABOUT US</NavLink></p>
            </div>
            </div>
            <span>
                <Carousel>             
                        <Carousel.Item>
                        <div className="about-container2">
                            <p className="text3">What Our Customers Say</p>
                            <h3>Over 35 years experience designing handmade kitchens</h3>
                            <p className="text4">Since my first contact I have received a very high level
                            of customer service and advice with my kitchen plans.
                             Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                            <p>Cheeroke </p>
                            <p className="link2"><NavLink activeClassName="selected" className="nav-link-header" to="/about">FREQUENTLY ASKED QUESTIONS</NavLink></p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="about-container2">
                            <p className="text3">What Our Customers Say</p>
                            <h3>Over 35 years experience designing handmade kitchens</h3>
                            <p className="text4">Since my first contact I have received a very high level
                            of customer service and advice with my kitchen plans.
                             Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                            <p>Jhon Smith</p>
                            <p className="link2"><NavLink activeClassName="selected" className="nav-link-header" to="/about">FREQUENTLY ASKED QUESTIONS</NavLink></p>
                        </div>
                        </Carousel.Item>
                        <Carousel.Item>
                        <div className="about-container2">
                            <p className="text3">What Our Customers Say</p>
                            <h3>Over 35 years experience designing handmade kitchens</h3>
                            <p className="text4">Since my first contact I have received a very high level
                            of customer service and advice with my kitchen plans.
                             Ben responded very quickly to all of my emails and delivery of the kitchen was as planned.</p>
                            <p>Jane, Dundee</p>
                            <p className="link2"><NavLink activeClassName="selected" className="nav-link-header" to="/about">FREQUENTLY ASKED QUESTIONS</NavLink></p>
                        </div>
                        </Carousel.Item>
                </Carousel>
            </span>
            <h3>Customer Gallery</h3>
            <div className="image-container">
                <img className="kitchen" src={image1} alt="kitchen" />
                <img className="kitchen" src={image2} alt="style" />
                <img className="kitchen" src={image3} alt="new" />
                <img className="kitchen" src={image4} alt="vintage" />
            </div>
            <p className="link3"><NavLink activeClassName="selected" className="nav-link-header" to="/about">VIEW MORE</NavLink></p>
            </div>
        
    );
}
export default About;
