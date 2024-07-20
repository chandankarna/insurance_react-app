import React from 'react';
import './Style.scss';
import { Container } from 'react-bootstrap';

const Vision = () => {
    return (
        <section className="about-vision">
            <Container>
                <div className="vision-header">
                    <h2 className="vision-section-title">Our Vision</h2>
                    <p className="vision-subtitle">Guided by our core values, we aspire to...</p>
                </div>
                <div className="vision-content container">
                    <div className="vision-box">
                        <i className="fas fa-lightbulb"></i>
                        <h3 className="vision-title">Innovation</h3>
                        <p className="vision-description">We constantly seek innovative solutions to redefine the insurance industry.</p>
                    </div>
                    <div className="vision-box">
                        <i className="fas fa-handshake"></i>
                        <h3 className="vision-title">Partnership</h3>
                        <p className="vision-description">We believe in strong partnerships and collaborative growth.</p>
                    </div>
                    <div className="vision-box">
                        <i className="fas fa-users"></i>
                        <h3 className="vision-title">Community</h3>
                        <p className="vision-description">We are committed to serving and strengthening our communities.</p>
                    </div>
                    <div className="vision-box">
                        <i className="fas fa-chart-line"></i>
                        <h3 className="vision-title">Growth</h3>
                        <p className="vision-description">We envision continuous growth and prosperity for all stakeholders.</p>
                    </div>
                    <div className="vision-box">
                        <i className="fas fa-heart"></i>
                        <h3 className="vision-title">Empathy</h3>
                        <p className="vision-description">Empathy is at the heart of our mission, ensuring we understand and address your needs.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Vision;
