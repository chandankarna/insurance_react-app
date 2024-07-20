import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Style.scss';

function Reason() {
  return (
    <Container className="reasons-container">
      <Row>
        <Col md={6} lg={3}>
          <Card className="reason-card">
            <i className="fas fa-check-circle"></i>
            <Card.Body>
              <Card.Title>Comprehensive Coverage</Card.Title>
              <Card.Text>
                Protect your future with policies that provide extensive coverage and peace of mind.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="reason-card">
            <i className="fas fa-hand-holding-heart"></i>
            <Card.Body>
              <Card.Title>Customer-Centric Approach</Card.Title>
              <Card.Text>
                Experience top-notch customer service and tailored insurance solutions that prioritize your needs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="reason-card">
            <i className="fas fa-chart-pie"></i>
            <Card.Body>
              <Card.Title>Financial Planning Tools</Card.Title>
              <Card.Text>
                Access tools and resources to plan your financial future and secure your family's well-being.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3}>
          <Card className="reason-card">
            <i className="fas fa-shield-alt"></i>
            <Card.Body>
              <Card.Title>Strong Security Measures</Card.Title>
              <Card.Text>
                Rest assured with our robust data security, ensuring your sensitive information is safe and sound.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Reason;
