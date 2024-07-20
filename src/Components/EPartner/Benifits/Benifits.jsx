import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import "./Style.scss";



const Benefits = () => {
  const benefitsData = [
    {
      icon: "fas fa-clock",
      title: "Flexible Work Hours",
      description: "Enjoy the freedom of setting your own work hours. Whether it's part-time or full-time, you have the flexibility to choose what suits your availability best."
    },
    {
      icon: "fas fa-globe",
      title: "Work From Anywhere",
      description: "No need for an office or daily commutes. You can work from the comfort of your chosen location using online platforms."
    },
    {
      icon: "fas fa-briefcase",
      title: "Be Your Own Boss",
      description: "As a POS, you're our business partner, not an employee. Say goodbye to the traditional boss-employee structure and embrace your entrepreneurial spirit."
    },
    {
      icon: "fas fa-dollar-sign",
      title: "High Earning Potential",
      description: "Unlock a world of income opportunities. Earn commissions on every insurance policy you sell, with unlimited potential."
    },
    {
      icon: "fas fa-laptop",
      title: "Minimal Investment",
      description: "All you need is a computer, smartphone, and an internet connection. There are no other financial commitments required."
    },
    {
      icon: "fas fa-trophy",
      title: "Performance-Based Rewards",
      description: "Your hard work doesn't go unnoticed. We offer performance-based incentives, including awards and accolades."
    },
    {
      icon: "fas fa-hands-helping",
      title: "Comprehensive Support",
      description: "Count on our internal team for all the support and mentorship you need. We're here to assist you every step of the way."
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Efficient Training",
      description: "Become a certified POS in less than a week with our streamlined 15-hour training program. Kickstart your journey with the right skills."
    }
  ];


  return (
    <section className="benefitsSection">
      <Container>
        <h2>Benefits of Joining Policy India Insurance as POS</h2>
        <Row>
          {benefitsData.map((benefit, index) => (
            <Col key={index} lg={3} md={6} sm={12} className="benefitCard">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <i className={benefit.icon}></i>
                  </div>
                  <Card.Title>{benefit.title}</Card.Title>
                  <Card.Text>{benefit.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
