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

  const [step, setStep] = useState(1); // To track the current form step

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
    // You can add validation logic here if needed
    setStep(step + 1); // Move to the next step
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <Form>
            {/* ... Form fields for step 1 */}
            <Button variant="primary" onClick={handleNextClick}>
              Next
            </Button>
          </Form>
        );
      case 2:
        return (
          <Form>
            {/* ... Form fields for step 2 */}
            <Button variant="primary" onClick={handleNextClick}>
              Next
            </Button>
          </Form>
        );
      // Add more cases for additional steps
      default:
        return null;
    }
  };

  return (
    <Container className="life-insurancePage">
      <div className="life-insurance-page">
        <h1>Life Insurance Application</h1>

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

        {selectedOption && renderForm()}
      </div>
    </Container>
  );
}

export default LifeInsurance;
