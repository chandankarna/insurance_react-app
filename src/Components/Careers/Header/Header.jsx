import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import happy from '../../../Assets/Images/Careers/happy.svg'
import './Style.scss'


const CareerHeader = () => {
    return (
        <section className="career-header">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="p-0">
                        <Image
                            src={happy}
                            alt="Career Image"
                            fluid
                        />
                    </Col>
                    <Col md={6}>
                        <div className="text-center text-md-start">
                            <h1>Career Opportunities</h1>
                            <p>
                                Join our dynamic team and be a part of our exciting journey. We offer a wide range of career opportunities in a variety of fields. Whether you're an experienced professional or a recent graduate, we have a place for you.
                            </p>
                            <p>
                                At Policy India, we value innovation, collaboration, and a commitment to excellence. We're always looking for talented individuals who share our passion for creating a better future.
                            </p>
                            <p>
                                Explore our current job openings and start your career with us. Together, we can achieve greatness.
                            </p>
                            <button className="btn btn-primary">View Job Openings</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CareerHeader;
