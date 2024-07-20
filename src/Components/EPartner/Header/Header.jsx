import React from "react";
import "./Style.scss";
import { Col, Container, Row } from "react-bootstrap";
import Register from "../Register/Register";
import hey from '../../../Assets/Images/ePartner/hey.svg'

const Header = () => {
  return (
    <section className="sales-header">
      <Container className="sales-header-content">
        <div className="someTexts">
          <h1 className="sales-header-title">
            Be Your Own Boss with Policy India POS
          </h1>
          <p className="sales-header-description">
            Joining Policy India as a Point of Sales (POS) Partner is your
            gateway to financial independence and a rewarding career.
          </p>
        </div>
        <Row>
          <Col md={5} sm={12} xs={12}>
            <div className="imgContainer">
              <img src={hey} alt="ok" width="100%" />
            </div>
          </Col>
          <Col md={7} sm={12} xs={12}>
            <div className="formTxts">
              <Register />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
