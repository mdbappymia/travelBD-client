import React from "react";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark py-5 footer">
      <Container>
        <Row>
          <Col lg={4} sm={12} className="my-3">
            <h3 className=" text-secondary">Address</h3>
            <div className="text-secondary">
              <p>Email: travel.bd@gmail.com</p>
              <p>Phone: +88001532658975</p>
            </div>
          </Col>
          <Col lg={4} sm={12} className="my-3">
            <Nav as="ul" className="text-center">
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/">
                  Terms of Service
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/">
                  Privacy Policy
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink className="nav-link" to="/">
                  FAQ
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
          <Col lg={4} sm={12} className="my-3 text-secondary">
            {/* all social link  */}
            <h4>Our social Link</h4>
            <div className="text-secondary">
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faFacebook}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faLinkedin}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faTwitter}
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                className="social-icon-footer"
                icon={faYoutube}
              ></FontAwesomeIcon>
            </div>
          </Col>
        </Row>
        <p className="text-center text-secondary">
          Copywrignt &copy; 2021 all right receved
        </p>
      </Container>
    </div>
  );
};

export default Footer;
