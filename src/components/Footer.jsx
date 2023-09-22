import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-3">
      <div className="container mt-3">
        <div className="row footer-container">
          <div className="col-12 col-md-4">
            <div className="footer-header">
              <h2 className="footer-header-2 fw-bold">Term of Service</h2>
            </div>
            <ul className="footer-ul">
              <li>
                <Link to="/" className="footer-text text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text text-decoration-none">
                  Term of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text text-decoration-none">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-header">
              <h2 className="footer-header-2 fw-bold">Help & Feedback</h2>
            </div>
            <ul className="footer-ul">
              <li>
                <Link to="/" className="footer-text text-decoration-none">
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-text text-decoration-none">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-header">
              <h2 className="footer-header-2 fw-bold">About</h2>
            </div>
            <ul className="footer-ul">
              <li>
                <Link to="/aboutus" className="footer-text text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <div className="inline-block footer-text">Contact Us</div>
                <div className="inline-block">
                  <Link to="/" className="social_icon">
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link to="/" className="social_icon ms-2">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link to="/" className="social_icon ms-2">
                    <FontAwesomeIcon icon={faTelegram} />
                  </Link>
                  <Link to="/" className="social_icon ms-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="copyright-text text-center" id="cr">
        &copy; Copyright 2023 Chillax
      </p>
    </footer>
  );
};

export default Footer;
