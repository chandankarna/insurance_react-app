import React, { Component } from 'react';

export class AdvantageTxt extends Component {
  render() {
    return (
      <div className="advantage-text">
        <h2 className="advantage-title">Experience the Policy India Advantage</h2>
        <p className="advantage-subtext">Your insurance experience, redefined with Policy India.</p>
        <div className="advantage-list">
          <div className="advantage-item">
            <i className="fas fa-shield"></i>
            <h3>Financial Security</h3>
            <p>We provide peace of mind through robust financial protection.</p>
          </div>
          <div className="advantage-item">
            <i className="fas fa-file-alt"></i>
            <h3>Simple & Transparent</h3>
            <p>We demystify insurance with clear policies you can understand.</p>
          </div>
          <div className="advantage-item">
            <i className="fas fa-check"></i>
            <h3>Quick, Stress-Free Claims</h3>
            <p>Hassle-free claims process ensures support when you need it.</p>
          </div>
          <div className="advantage-item">
            <i className="fas fa-chart-line"></i>
            <h3>Instant Quotes</h3>
            <p>Get quotes instantly from top insurers for informed decisions.</p>
          </div>
          <div className="advantage-item">
            <i className="fas fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>We're here around the clock to assist you in your time of need.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvantageTxt;
