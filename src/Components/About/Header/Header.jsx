import React from 'react';
import './Style.scss';
import aboutHeader from '../../../Assets/Images/AboutPage/about-header.svg'

const Header = () => {
    return (
        <header className="about-header">
            <div className="header-content container">
                <div className="header-text">
                    <h1 className="header-title">Welcome to Policy India</h1>
                    <p className="header-subtitle">Your Trusted Partner in Financial Security</p>
                </div>
                <div className="header-illustration">
                    <img src={aboutHeader} alt="Financial Security Illustration" width="100%" />
                </div>
                <div className="header-paragraph">
                    <div className="column">
                        <p>
                            At Policy India, we are dedicated to providing you with comprehensive financial security solutions. Our commitment goes beyond insurance; it's about safeguarding your dreams and ensuring a brighter future for you and your loved ones.
                        </p>
                    </div>
                    <div className="column">
                        <p>
                            With over 16 years of experience as an IRDAI-licensed Insurance Broker, we offer a range of services at no additional cost. You can compare and purchase plans from 30+ insurance companies, receive support from our certified advisors, and manage all your policies in one convenient place using our Policy India app.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
