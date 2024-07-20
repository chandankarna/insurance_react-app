import React from 'react';
import './Style.scss';
import { Col, Container, Row } from 'react-bootstrap';
import whatIs from '../../../Assets/Images/AboutPage/think.svg';

const What = () => {
    return (
        <section className="about-what">
            <Container className="what-content container">
                <Row>
                    <Col lg={6} ms={12} sm={12} xs={12} className="what-column illustration">
                        <img src={whatIs} alt="Policy India Illustration" />
                    </Col>
                    <Col lg={6} ms={12} sm={12} xs={12} className="what-column text">
                        <h2 className="what-title">Discover Policy India</h2>
                        <p className="what-description">
                            At Policy India, we redefine the world of insurance. We are not merely a company; we are your guardians of financial security. Our commitment extends beyond policies; it's about protecting your peace of mind, your aspirations, and your economic well-being.
                        </p>
                        <p className="what-description">
                            With 16 years of experience as an IRDAI-licensed Insurance Broker, we place you at the forefront. We offer a range of services at no additional cost, granting you access to over 30 reputable insurance providers. Our certified advisors are here to guide you, and our user-friendly tools make policy management seamless.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default What;
