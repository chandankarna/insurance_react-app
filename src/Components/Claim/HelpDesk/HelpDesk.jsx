import React from 'react';
import './Style.scss';
import callImg from '../../../Assets/Images/Claim/hello.svg'

const HelpDesk = () => {
    return (
        <section className="helpDeskSection">
            <div className="helpDeskContent container">
                <div className="imgContainer">
                    <img src={callImg} alt="Hello Illustration Policy India" className="helpImg" width="100%" />
                </div>
                <div className="textContainer">
                    <h2>Helpdesk!</h2>
                    <p>Have queries related to Insurance Claims? Feel free to contact our claim assistance team available at your service.</p>
                    <p>Get in touch with us via:</p>
                    <ul>
                        <li><i className="fas fa-phone"></i> <a href="tel:999999999999">9999 9999 9999</a></li>
                        <li><i className="fas fa-mail-bulk"></i> <a href="mailto:support@policyindia.com">suport@policyindia.com</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HelpDesk;
