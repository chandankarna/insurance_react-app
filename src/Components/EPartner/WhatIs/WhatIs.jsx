import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Style.scss'
import think from '../../../Assets/Images/ePartner/think.svg'

const WhatIs = () => {
    return (
        <>
            <section className="whatSectionCOntainer">
                <Container className="what-is-pos">
                    <h2>What is POS (Point of Sales)?</h2>
                    <Row>
                        <Col md={6}>
                            <div className="textContainer">
                                <p>
                                    The insurance sector plays a significant role in generating employment opportunities in India. It's a highly regulated industry overseen by the Insurance Regulatory and Development Authority of India (IRDAI). In an effort to increase insurance penetration across the nation, the IRDAI introduced the concept of POS (Point of Sales).
                                </p>
                                <p>
                                    A POS is an individual authorized to sell insurance policies after obtaining certification from the IRDAI. This certification enables them to directly engage with insurance brokers and companies.
                                </p>
                                <p>
                                    If you aspire to earn additional income or build a career in the insurance sector, becoming a POS is a viable option. To become a POS, you need to register with an insurance broker company such as Policy India, undergo the required training, and pass the IRDAI's certification test with a specified minimum percentage.
                                </p>
                                <p>
                                    If you possess the ability to persuade people and explain the significance of purchasing insurance policies, you can embark on a fulfilling career as a POSP (Point of Sales Person).
                                </p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="imgContainer">
                                <img src={think} alt="Policy India Think Illustration" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default WhatIs;
