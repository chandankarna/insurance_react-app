import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FaqImg from "../../../Assets/Images/HomePage/faqImg.svg";
import Faqs from "./FAQs";
import './Style.scss'

function FaqSection() {
    return (
        <>
            <section className="FaqSection">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Faqs />
                        </Col>
                        <Col lg={6} className="faqStyle">
                            <div className="faqHeading">
                                <h1>
                                    Have any question about
                                    {" "}<span>Insurance</span>?
                                </h1>
                                <p>
                                    Browse the list below to understand insurance in a simpler way.
                                </p>
                                <img
                                    src={FaqImg}
                                    alt="Faq Illustrator P Insuranse"
                                    className="faqImg"
                                    width="100%"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default FaqSection;
