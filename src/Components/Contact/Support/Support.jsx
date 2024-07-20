import React from 'react';
import call from '../../../Assets/Images/Contact/call.svg'
import './Style.scss';

const Support = () => {
    return (
        <section className="contact-support">
            <div className="contact-support-content">
                <div className="contact-support-info">
                    <h2 className="contact-support-title">24/7 Customer Support</h2>
                    <p className="contact-support-description">
                        Our dedicated support team is available around the clock to assist you with any questions or concerns.
                    </p>
                </div>
                <div className="contact-support-illustration">
                    <img src={call} alt="Customer Support Illustration" />
                </div>
            </div>
        </section>
    );
};

export default Support;
