import React, { useState } from 'react';
import './Style.scss';
import LoginImg from '../../Assets/Images/ePartner/login.svg';
import { Col, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';



function Login() {
    const [formData, setFormData] = useState({
        text: '',
    });

    const [errors, setErrors] = useState({
        text: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { ...errors };

        // Validate if it's a valid email or a number with at least 10 digits
        if (!/^\d{10,}$/.test(formData.text) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.text)) {
            newErrors.text = 'Please enter a valid email or a number with at least 10 digits';
        } else {
            newErrors.text = '';
            // Add your backend connection logic here
        }
        setErrors(newErrors);
    };

    return (
        <>
            <Helmet>
                <title>Login ~ Policy India</title>
            </Helmet>
            <div className="wrapper login-page-container">
                <Container className='loginPage'>
                    <Col className="left-side-hero" md={6} sm={12} xs={12}>
                        <div className="imgContainer">
                            <img src={LoginImg} alt="Policy India Login Illustration" className="img-container" />
                        </div>
                    </Col>
                    <Col className="right-side-hero" md={4} sm={12} xs={12}>
                        <div className="formContainer">
                            <form onSubmit={handleSubmit}>
                                <h2 className="login-title">Login Here</h2>
                                <input
                                    type="text"
                                    name="text"
                                    id="text"
                                    placeholder='Enter email or number'
                                    required
                                    className="login-input"
                                    value={formData.text}
                                    onChange={handleChange}
                                />
                                <p className="error-message">{errors.text}</p>
                                <button type="submit" className="login-button">Submit</button>
                            </form>
                            <div className="links">
                                <a href="forgot-password" className="forgot-password-link">Forgot Password?</a>
                                <br />
                                Don't have an account? <a href="epartner" className="register-link">Register here</a>
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>
        </>
    );
}

export default Login;
