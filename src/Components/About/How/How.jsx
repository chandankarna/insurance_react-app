import React from 'react';
import './Style.scss';
import { Col, Container, Row } from 'react-bootstrap';
import howImage from '../../../Assets/Images/AboutPage/idea.svg';

const How = () => {
    return (
        <section className="about-how">
            <Container className="how-content container">
                <Row className='how-rows'>
                    <Col lg={7} md={12} sm={12} xs={12} className="how-column text">
                        <div className="howTxts">
                        <h2 className="how-title">How We Do It</h2>
                        <p className="how-description">
                            Our approach is simple yet effective. We prioritize your needs and convenience in every step of the process. Here's how we work:
                        </p>
                        <ul className="how-list">
                            <li>Understand Your Goals: We start by understanding your financial goals and insurance needs.</li>
                            <li>Research and Compare: We research and compare policies from over 30 reputable insurance providers to find the best options for you.</li>
                            <li>Personalized Recommendations: Our certified advisors provide personalized recommendations tailored to your unique situation.</li>
                            <li>Seamless Transactions: We make the entire process, from policy selection to claims, seamless and hassle-free.</li>
                            <li>Continuous Support: Our team is here to provide ongoing support and assistance whenever you need it.</li>
                        </ul>
                        </div>
                    </Col>
                    <Col lg={5} md={12} sm={12} xs={12} className="how-column illustration">
                        <img src={howImage} alt="How We Work Illustration" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default How;
