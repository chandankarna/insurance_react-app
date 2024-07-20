import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import friend from '../../../Assets/Images/HomePage/friend.svg'
import './Style.scss'

export default function WhySection() {
    return (
        <>
            <section className="whySectionContainer">
                <Container>

                    <Row>
                        <Col lg={5} md={6} sm={12} xs={12} className='whySectionOuterColumnLeft'>
                            <div className="whySectionInnerColumn">
                                <img src={friend} alt="Handshake" className="whyImg" width="100%" />
                            </div>
                        </Col>
                        <Col lg={7} md={6} sm={12} xs={12} className='whySectionOuterColumnRight'>
                            <div className="whySectionInnerColumn">
                                <h1 className='headingText'>
                                    Why <span>Policy India</span>?
                                </h1>
                                <p className="disc">
                                    Buying insurance becomes convenient when you have the right insurance partner with you. Policy Indiais one of the best platforms to buy an insurance policy according to your needs because of the following reasons -
                                </p>
                                <div className="reasonBoxes">
                                    <div className="box">
                                        <h6>
                                            100% on your side
                                        </h6>
                                        <p className="cardDisc">
                                            We work for you, not for insurance companies. We have only you in mind when we recommend plans.
                                        </p>
                                    </div>
                                    <div className="box">
                                        <h6>
                                            0% spam
                                        </h6>
                                        <p className="cardDisc">
                                            We call you only when requested from your end.
                                        </p>
                                    </div>
                                    <div className="box">
                                        <h6>
                                            360° support during claims
                                        </h6>
                                        <p className="cardDisc">
                                            Insurance is a piece of paper till claims are paid. We are committed to provide you with expert assistance during claims.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
