import React from 'react';
import './Style.scss';

const Map = () => {
    return (
        <section className="contact-map">
            <div className="contact-map-content container">
                <h2 className="contact-map-title">Visit Our Office</h2>
                <div className="contact-map-iframe">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.48645643546!2d77.22246667635362!3d28.645149683506087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd23f80465c5%3A0xe62b709790c68d0b!2sAsaf%20Ali%20Rd%2C%20Kucha%20Tiku%20Shah%2C%20Chandni%20Chowk%2C%20Delhi!5e0!3m2!1sen!2sin!4v1697116695067!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Map;
