import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import price from '../../../Assets/Images/Advantage-Card/rupee.png';
import advice from '../../../Assets/Images/Advantage-Card/interview.png';
import reliable from '../../../Assets/Images/Advantage-Card/reliable.png';
import support from '../../../Assets/Images/Advantage-Card/support.png';
import help from '../../../Assets/Images/Advantage-Card/help.png';
import offer from '../../../Assets/Images/Advantage-Card/offer.png';


export default function AdvantageCards() {
  return (
    <Container>
      <Row>
        <Col lg={2} md={4} sm={6} xs={6}>
          <div className="cardBox">
            <img src={price} alt="Price Illustration" />
            <h6>Best Prices</h6>
            <p>Guaranteed</p>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={6}>
          <div className="cardBox">
            <img src={advice} alt="Advice Illustration" />
            <h6>Unbiased Advice</h6>
            <p>Keeping customers first</p>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={6}>
          <div className="cardBox">
            <img src={reliable} alt="Reliability Illustration" />
            <h6>100% Reliable</h6>
            <p>Regulated by IRDAI</p>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={6}>
          <div className="cardBox">
            <img src={support} alt="Support Illustration" />
            <h6>Claims Support</h6>
            <p>Made stress-free</p>
          </div>
        </Col>
        <Col lg={2} md={4} sm={6} xs={6}>
          <div className="cardBox">
            <img src={help} alt="Help Illustration" />
            <h6>Happy to Help</h6>
            <p>Every day of the week</p>
          </div>
        </Col>
      <Col lg={2} md={4} sm={6} xs={6}>
        <div className="cardBox">
          <img src={offer} alt="Your Illustration" />
          <h6>Exclusive Offers</h6>
          <p>Savings, Discounts, Perks</p>
        </div>
      </Col>

      </Row>
    </Container>
  );
}
