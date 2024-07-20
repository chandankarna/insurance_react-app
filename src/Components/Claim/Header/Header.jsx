import React, { Component } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import claim from '../../../Assets/Images/Claim/claim3d.png'
import './Style.scss'


export class Header extends Component {
    render() {
        return (
            <>
                <section className="claimHeaderContainer">
                    <Container className='claimHeader'>
                        <h1>
                            Hope you're Safe!
                        </h1>
                        <p>
                            Calm down, we are there to help you out.
                        </p>
                        <Row>
                            <Col lg={7} md={12} sm={12} xs={12}>
                                <div className="formContainer">
                                    <Form>
                                        <legend>Submit Your Claim Request</legend>
                                        <Form.Group className="mb-3" controlId="policyNumber">
                                            <Form.Label>Policy Number</Form.Label>
                                            <Form.Control type="number" placeholder="Policy Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="mobileNumber">
                                            <Form.Label>Mobile Number</Form.Label>
                                            <Form.Control type="number" placeholder="Mobile Number" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="email">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                            <Col lg={5} md={12} sm={12} xs={12}>
                                <div className="imgContainer">
                                    <img src={claim} alt="" className="claimImg" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}

export default Header