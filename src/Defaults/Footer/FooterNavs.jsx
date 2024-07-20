import React from "react";
import "./Style.scss";

function FooterNavs() {
  return (
    <>
      <div className="footerContainer">
        <footer className="footer bg-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                <p className="mt-4">
                  At Policy India, we're dedicated to securing your financial
                  future. Our comprehensive insurance solutions cover everything
                  from life and health to property and casualty. We provide
                  peace of mind through reliable coverage and exceptional
                  service.
                </p>
                <p>
                  With Policy India, you can focus on what matters most to you
                  while we handle the complexities of insurance. Trust us to
                  safeguard your assets and loved ones, offering competitive
                  rates and tailored protection for your unique needs.
                </p>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">Quick Links</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="health-insurance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Health Insurance
                    </a>
                  </li>
                  <li>
                    <a href="life-insurance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Life Insurance
                    </a>
                  </li>
                  <li>
                    <a href="family-insurance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Family Insurance
                    </a>
                  </li>
                  <li>
                    <a href="term-insurance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Term Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#home-insurance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Home Insurance
                    </a>
                  </li>
                  <li>
                    <a href="travel-insurance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Travel Insurance
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">About</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="career" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Career
                    </a>
                  </li>
                  <li>
                    <a href="about" className="text-foot">
                      <i className="fas fa-arrow-right"></i> About us
                    </a>
                  </li>
                  <li>
                    <a href="contact" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Contact us
                    </a>
                  </li>
                  <li>
                    <a href="graevance" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Graevance
                    </a>
                  </li>
                  <li>
                    <a href="services" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Our Services
                    </a>
                  </li>
                  <li>
                    <a href="policy-india-group" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Policy India Group
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <h4 className="text-light footer-head">LEGEL</h4>
                <ul className="list-unstyled footer-list mt-4">
                  <li>
                    <a href="terms-conditions" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Terms of services
                    </a>
                  </li>
                  <li>
                    <a href="privacy-policy" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="refund-policy" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="cookie" className="text-foot">
                      <i className="fas fa-arrow-right"></i> Cookie
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <footer className="footer bg-footer footer-bar">
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="text-sm-left">
                  <p className="mb-0">
                    &copy; 2023 Policy India. All Right Reserved.{" "}
                  </p>
                </div>
              </div>

              <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                <ul className="list-unstyled text-sm-right social-icon social mb-0">
                  <li className="list-inline-item">
                    <a href="#link" className="rounded">
                      <i className="fab fa-facebook-f" title="Facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#link" className="rounded">
                      <i className="fab fa-instagram" title="Instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#link" className="rounded">
                      <i className="fab fa-twitter" title="Twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#link" className="rounded">
                      <i className="fab fa-google-plus" title="Google +"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#link" className="rounded">
                      <i className="fab fa-linkedin" title="Linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default FooterNavs;
