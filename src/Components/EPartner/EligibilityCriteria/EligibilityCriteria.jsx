import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import eligibility from '../../../Assets/Images/ePartner/document.svg'
import "./Style.scss"

const Eligibility = () => {
    return (
        <>
            <section className="eligibilitySectionContainer">
                <Container>
                    <h2>Eligibility Criteria</h2>
                    <Row>
                        <Col md={5} sm={12} xs={12}>
                            <div className="imgContainer">
                                <img src={eligibility} alt="Policy India Eligibility Illustration" />
                            </div>
                        </Col>
                        <Col md={7} sm={12} xs={12} className='eligibilityTxt'>
                            <div className="eligibility">
                                <p>
                                    To become a Policy India Point of Sale (POS) agent, you must meet the following requirements:
                                </p>
                                <ol>
                                    <li>
                                        <strong>Age Requirement:</strong> You should be a resident of India and be above 18 years of age.
                                    </li>
                                    <li>
                                        <strong>Education:</strong> Possess a minimum 10th-grade passing certificate.
                                    </li>
                                    <li>
                                        <strong>Documentation:</strong> Have the necessary documents such as PAN Card, Aadhaar Card, Photograph, and Highest Qualification Certificate.
                                    </li>
                                    <li>
                                        <strong>Training:</strong> You must complete the mandatory training program as prescribed by IRDAI, which requires 15 hours of training. The exam can be taken online, and the certificate received after passing is valid for a lifetime.
                                    </li>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Eligibility;
