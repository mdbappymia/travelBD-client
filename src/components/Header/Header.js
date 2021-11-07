import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <div className="home-header">
        <div className="overlay text-white">
          <Container>
            <Row>
              <Col sm={12} lg={6}>
                <h1 className="text-uppercase text-center py-5 fw-bold">
                  Take a tour on vacation and fresh your mind
                </h1>
              </Col>
              <Col sm={12} lg={6}>
                <div className="ms-5">
                  <h2>Our special care</h2>
                  <ul className="tag-list">
                    <li>24 Hour Service</li>
                    <li>Lowest Cost</li>
                    <li>Five star hotel service</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Header;
