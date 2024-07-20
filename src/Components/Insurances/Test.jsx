import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../Style.scss';

function LifeInsurance() {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
    smoke: 'no',
    annualIncome: '',
    coverValue: '',
    coverPeriod: '',
    payTerm: '',
  });

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextClick = () => {
    // Handle the next button click, e.g., validation and form submission
    // You can add your logic to store or process the data here.
  };

  return (
    <Container className="life-insurancePage">
      <div className="life-insurance-page">
        <h1>Life Insurance</h1>

        <div className="options">
          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            id="maleOption"
            checked={selectedOption === 'male'}
            onChange={() => handleOptionChange('male')}
          />

          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            id="femaleOption"
            checked={selectedOption === 'female'}
            onChange={() => handleOptionChange('female')}
          />
        </div>

        {selectedOption && (
          <Form>
            <Form.Group className="form-group">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                max={new Date().toISOString().split('T')[0]}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleNextClick}>
              Next
            </Button>
          </Form>
        )}
      </div>

      {/* Additional Form */}
      {selectedOption && formData.name && formData.dob && formData.mobile && formData.email && (
        <Form>
          <Form.Group className="form-group">
            <Form.Label>Do you smoke or chew tobacco?</Form.Label>
            <Form.Control
              as="select"
              name="smoke"
              value={formData.smoke}
              onChange={handleInputChange}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>What's your annual income?</Form.Label>
            <Form.Control
              as="select"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleInputChange}
            >
              <option value="2-10 Lakhs">2-10 Lakhs</option>
              <option value="10-25 Lakhs">10-25 Lakhs</option>
              <option value="25-50 Lakhs">25-50 Lakhs</option>
              <option value="50-99 Lakhs">50-99 Lakhs</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Cover Value?</Form.Label>
            <Form.Control
              as="select"
              name="coverValue"
              value={formData.coverValue}
              onChange={handleInputChange}
            >
              <option value="10 lakhs - 1 Crore">10 lakhs - 1 Crore</option>
              <option value="1 Crore - 10 Crores">1 Crore - 10 Crores</option>
              <option value="10 Crores - 30 Crores">10 Crores - 30 Crores</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Cover Period?</Form.Label>
            <Form.Control
              as="select"
              name="coverPeriod"
              value={formData.coverPeriod}
              onChange={handleInputChange}
            >
              <option value="5 years - 25 years">5 years - 25 years</option>
              <option value="25 years - 50 years">25 years - 50 years</option>
              <option value="50 years - 75 years">50 years - 75 years</option>
              <option value="75 years - 85 years">75 years - 85 years</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="form-group">
            <Form.Label>Pay Term</Form.Label>
            <Form.Control
              as="select"
              name="payTerm"
              value={formData.payTerm}
              onChange={handleInputChange}
            >
              <option value="5 years - 25 years">5 years - 25 years</option>
              <option value="25 years - 50 years">25 years - 50 years</option>
              <option value="50 years - 75 years">50 years - 75 years</option>
              <option value="75 years - 85 years">75 years - 85 years</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" onClick={handleNextClick} width={100}>
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default LifeInsurance;
