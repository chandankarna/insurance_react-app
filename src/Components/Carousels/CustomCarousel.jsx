import React from 'react';
import './Style.scss'
import Carousel from 'react-bootstrap/Carousel';
import AlgoInsu from '../../Assets/Images/Carousel/poster.png'

function CustomCarousel() {
  return (
    <Carousel onTouchMove={true} className="custom-carousel">
      <Carousel.Item>
        <img src={AlgoInsu} alt="Offer Carousel" width="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={AlgoInsu} alt="Offer Carousel" width="100%"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={AlgoInsu} alt="Offer Carousel" width="100%"/>
      </Carousel.Item>
    </Carousel>
  );
}

export default CustomCarousel;