import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Style.scss';
import digitalTransformation from '../../../Assets/Images/Articles/digital-transformation.jpg'
import protecting from '../../../Assets/Images/Articles/protecting.jpg'
import security from '../../../Assets/Images/Articles/security.jpg'
import healthInsurance from '../../../Assets/Images/Articles/health-insurance.jpg'

const ArticleCard = () => {
  return (
    <>
      <section className="article-card-container">
        <Container>
          <h1>
            Latest Articles
          </h1>
          <Row className="article-cards">
            <Col className="innerCard" xl={3} md={6} sm={12} xs={12}>
              <Card className="article-card">
                <Card.Img variant="top" src={digitalTransformation} alt="Digital Transformation Insurance" />
                <Card.Body>
                  <Card.Title>
                    Digital Transformation in Insurance: Policy India s Success Story
                  </Card.Title>
                  <Card.Text>
                    Explore how Policy India leveraged technology to revolutionize the insurance industry and provide a seamless customer experience.
                  </Card.Text>
                  <a href='#link' className='read-more-btn'>Read More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="innerCard" xl={3} md={6} sm={12} xs={12}>
              <Card className="article-card">
                <Card.Img variant="top" src={protecting} alt="Protecting Insurance" />
                <Card.Body>
                  <Card.Title>
                    Protecting What Matters: A Deep Dive into Policy India s Coverage Options
                  </Card.Title>
                  <Card.Text>
                    Discover the diverse range of insurance policies offered by Policy India and how they safeguard the future of their customers.
                  </Card.Text>
                  <a href='#link' className='read-more-btn'>Read More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="innerCard" xl={3} md={6} sm={12} xs={12}>
              <Card className="article-card">
                <Card.Img variant="top" src={security} alt="Security Insurance" />
                <Card.Body>
                  <Card.Title>
                    Data Security in Focus: How Policy India Ensures Your Privacy
                  </Card.Title>
                  <Card.Text>
                    Learn about Policy India s robust data security measures and their unwavering commitment to safeguarding your personal information.
                  </Card.Text>
                  <a href='#link' className='read-more-btn'>Read More</a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="innerCard" xl={3} md={6} sm={12} xs={12}>
              <Card className="article-card">
                <Card.Img variant="top" src={healthInsurance} alt="Health Insurance" />
                <Card.Body>
                  <Card.Title>
                    Health Insurance Decoded: Your Comprehensive Guide by Policy India
                  </Card.Title>
                  <Card.Text>
                    Delve into the world of health insurance with expert insights from Policy India, helping you make informed decisions about your well-being.
                  </Card.Text>
                  <a href='#link' className='read-more-btn'>Read More</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ArticleCard;
