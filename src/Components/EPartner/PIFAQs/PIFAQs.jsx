import React from 'react';
import { Container, Accordion, Row, Col } from 'react-bootstrap';
import faqImg from '../../../Assets/Images/HomePage/faqImg.svg'
import "./Style.scss";

const faqs = [
    {
        question: "What is Policy India?",
        answer: "Policy India is an insurance company dedicated to providing a wide range of insurance solutions to meet your needs, from home and health insurance to motor insurance and more.",
    },
    {
        question: "How can I get a quote for insurance?",
        answer: "Getting a quote is easy. Visit our website, enter your details, and our system will provide you with a tailored insurance quote in minutes.",
    },
    {
        question: "Can I customize my insurance policy?",
        answer: "Yes, you can. We offer flexible insurance plans, allowing you to customize your policy to suit your unique requirements.",
    },
    {
        question: "How do I file a claim?",
        answer: "Filing a claim is straightforward. Visit our claims page, provide the required information, and our team will guide you through the process.",
    },
    {
        question: "What types of insurance do you offer?",
        answer: "We offer a wide array of insurance products, including home insurance, health insurance, motor insurance (two-wheeler, car, and commercial vehicle), term insurance, traditional endowment, and ULIPs.",
    },
    {
        question: "How can I become a Policy India Point of Sale (POS) agent?",
        answer: "Becoming a POS is easy. Contact us to learn more about the process and start your journey as a certified POS agent with Policy India.",
    },
];

const PIFAQs = () => {
    return (
        <>
            <section className="faqSection">
                <Container>
                    <h2 className='headingTxt'>FAQs - Policy India</h2>
                    <Row className='faqRows'>
                        <Col md={7} sm={12} xs={12}>
                            <Accordion defaultActiveKey="0" flush>
                                {faqs.map((faq, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{faq.question}</Accordion.Header>
                                        <Accordion.Body>{faq.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Col>
                        <Col md={5} sm={12} xs={12} className='imgSide'>
                            <div className="imgContainer">
                                <img src={faqImg} alt="FAQs Illustration Policy India" className="faqImg" width={100}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default PIFAQs;
