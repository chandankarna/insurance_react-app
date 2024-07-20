import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Style.scss'


const ClaimRequestSteps = () => {
    return (
        <>
            <section className="claimSectionContainer">
                <Container>
                    <h2 className="text-center my-4">Steps for Claim Request</h2>
                    <Row className="gx-5">
                        <Col md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="fas fa-envelope fa-3x mb-3"></i>
                                    <h4>Contact Us</h4>
                                    <p>Have queries related to Insurance Claims? Contact our dedicated claim assistance team via Email, Phone Calls, or visit our website to raise a claim request.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="fas fa-clipboard fa-3x mb-3"></i>
                                    <h4>Claim Request</h4>
                                    <p>Our experienced team will collect all necessary personal details and information regarding the claim issues faced by the policyholder. This information is then forwarded to the insurer for further action.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="gx-5 mt-4">
                        <Col md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="fas fa-cogs fa-3x mb-3"></i>
                                    <h4>Insurer Processes</h4>
                                    <p>The insurer takes prompt action and carefully reviews the claim request and accompanying documents. They may provide cashless approval or other suitable solutions.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="fas fa-users fa-3x mb-3"></i>
                                    <h4>Customer Intimation</h4>
                                    <p>The insurer's decision is communicated to the customer, and our dedicated service team guides the customer through the subsequent steps required for claim settlement.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="gx-5 mt-4">
                        <Col md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="fas fa-comments fa-3x mb-3"></i>
                                    <h4>Follow up with Customer & Insurers</h4>
                                    <p>Any pending requirements from the customer are promptly conveyed to them, and relevant information is forwarded to the insurer for further processing.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="text-center">
                                <Card.Body>
                                    <i className="fas fa-check-circle fa-3x mb-3"></i>
                                    <h4>Claim Settlements</h4>
                                    <p>Once all the necessary procedures are completed, the customer is notified about the status of their claim, which may include cashless approval or reimbursement approval.</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container >
            </section>
        </>
    );
};

export default ClaimRequestSteps;
