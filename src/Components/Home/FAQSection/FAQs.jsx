import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function Faqs() {
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Would it cost me more if I buy insurance through your portal?</Accordion.Header>
        <Accordion.Body>
          No, you will not be charged any extra amount. Policy India portal shows you the same amount of premium across the web.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Are you just another website that sells insurance?</Accordion.Header>
        <Accordion.Body>
          No, Policy India offers more than just selling insurance. We also assist in the claim process and reimbursement.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Would I get repeated calls from your sales team if I fill in my details on your website?</Accordion.Header>
        <Accordion.Body>
          No, we respect your privacy. You will not receive repeated sales calls from us.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>What type of insurance plans are listed on your website?</Accordion.Header>
        <Accordion.Body>
          We offer a wide range of insurance plans, including life insurance, health insurance, property insurance, and more.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Why should I purchase through your portal instead of directly buying from the insurance company?</Accordion.Header>
        <Accordion.Body>
          Policy India provides a convenient platform to compare different insurance options and offers expert guidance in choosing the right plan for your needs.
        </Accordion.Body>
      </Accordion.Item>

      {/* Additional FAQs */}
      <Accordion.Item eventKey="5">
        <Accordion.Header>How do I file a claim with Policy India?</Accordion.Header>
        <Accordion.Body>
          To file a claim, you can visit our website and navigate to the 'Claims' section. Follow the instructions provided to initiate the claim process.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Can I customize my insurance policy on your portal?</Accordion.Header>
        <Accordion.Body>
          Yes, Policy India allows you to customize your insurance policy based on your specific needs. Use our online tools to tailor your coverage.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>Do you offer discounts for bundled insurance plans?</Accordion.Header>
        <Accordion.Body>
          Absolutely! Policy India provides discounts for bundled insurance plans, such as combining auto and home insurance.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>What payment methods are accepted for insurance premiums?</Accordion.Header>
        <Accordion.Body>
          We accept various payment methods, including credit/debit cards, bank transfers, and online payment platforms. Choose the one that suits you best.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>Is Policy India available in all regions?</Accordion.Header>
        <Accordion.Body>
          Policy India is available in most regions. However, coverage may vary, so please check our website or contact our support team to confirm availability in your area.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

  );
}

export default Faqs;
