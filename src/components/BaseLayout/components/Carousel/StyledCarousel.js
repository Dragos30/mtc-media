import React from 'react';
import slide1 from '../Assets/Bitmap-4@2x.png';
import slide2 from '../Assets/Bitmap-5.png';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const StyledCarousel = () => {
    return(
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={slide1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={slide2}
                alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    )
}
export default StyledCarousel;