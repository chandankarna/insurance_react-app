import React from 'react';
import './Style.scss'
import Carousel from 'react-bootstrap/Carousel';
import AlgoInsu from '../../Assets/Images/Carousel/poster.png'
import { Container } from 'react-bootstrap';

function CustomCarousel() {
  return (
    <>
      <div className="customBG">
        <Container>
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <div className="d-flex justify-content-between">
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-between">
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-between">
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
                <img src={AlgoInsu} alt="Offer Carousel" width="32%" />
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default CustomCarousel;
