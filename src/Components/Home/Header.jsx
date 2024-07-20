import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CustomCarousel from '../Carousels/CustomCarousel'
import './Style.scss'
import HeaderRow from './HeaderRow'

function Header() {
    return (
        <>
            <div className="wrapper home-wrapper">
                <Container>
                    <Row>
                        <Col md={7}>
                            <div className="headerTextContainer">
                                <div className="texts">
                                    <h1>
                                        Let's find you <br />
                                        the <span>Best Insurance</span>
                                    </h1>
                                </div>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className="headerCarouselContainer">
                                <CustomCarousel />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <HeaderRow />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header