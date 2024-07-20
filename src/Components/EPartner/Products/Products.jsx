import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Style.scss";

const Products = () => {
    return (
        <section className="productsSection">
            <Container>
                <h2 className="section-title">Products You Can Sell</h2>
                <Row>
                    <Col lg={4} md={6} className="productCard">
                        <div className="product">
                            <div className="productIcon">
                                <i className="fas fa-home"></i>
                            </div>
                            <h3 className="product-title">Home Insurance</h3>
                            <p className="product-description">Comprehensive policies to protect your clients' homes and belongings.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="productCard">
                        <div className="product">
                            <div className="productIcon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3 className="product-title">Health Insurance</h3>
                            <p className="product-description">Wide-ranging health insurance plans for various needs and budgets.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="productCard">
                        <div className="product">
                            <div className="productIcon">
                                <i className="fas fa-car"></i>
                            </div>
                            <h3 className="product-title">Motor Insurance</h3>
                            <p className="product-description">Coverage for two-wheelers, cars, and commercial vehicles, keeping your clients protected.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="productCard">
                        <div className="product">
                            <div className="productIcon">
                                <i className="fas fa-umbrella"></i>
                            </div>
                            <h3 className="product-title">Term Insurance</h3>
                            <p className="product-description">Reliable term insurance options to secure your clients' future.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="productCard">
                        <div className="product">
                            <div className="productIcon">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3 className="product-title">Traditional Endowment</h3>
                            <p className="product-description">Stable, long-term savings with traditional endowment plans.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="productCard">
                        <div className="product">
                            <div className="productIcon">
                                <i className="fas fa-chart-line"></i>
                            </div>
                            <h3 className="product-title">ULIPs</h3>
                            <p className="product-description">Unit-Linked Insurance Plans for potential high returns and investment growth.</p>
                        </div>
                    </Col>
                </Row>
                <p className="productNote">Becoming a POS is a smart career move for those seeking alternative income opportunities in the insurance field. Contact Policy India Insurance Brokers Pvt. Ltd. to learn more about the possibilities.</p>
            </Container>
        </section>
    );
};

export default Products;
