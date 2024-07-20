import React from 'react';
import './Style.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Calling from '../../../Assets/Images/HomePage/calling.svg';

function Call() {
    return (
        <>
            <section className="CallSection">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <img src={Calling} alt="Calling Illustration" className="callImg" width="100%" />
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <div className="call-container">
                                <h2>Happy to Help You, Reach Us!</h2>
                                <p>Policy India has an expert team to assist you with all your queries regarding insurance policies. Please feel free to get in touch with us:</p>
                                <div className="contact-options">
                                    <a href="#schedule-call" className="btn btn-primary">Schedule a Call</a>
                                    <div className="whatsapp">
                                        <span>or</span>
                                        <a  href="#WhatsApp-call">WhatsApp</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Call;
