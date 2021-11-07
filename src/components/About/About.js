import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-page py-5 mb-5 text-white">
        <div>
          <h1 className="text-center fw-bold my-5">About Us</h1>
        </div>
      </div>
      <Container className="mb-5">
        <Row>
          <Col className="d-none d-lg-block" lg={6} sm={12}>
            <img
              className="about-image"
              src="https://i.ibb.co/wgkXJVS/The-Sundarbans.jpg"
              alt=""
            />
          </Col>
          <Col lg={6} sm={12}>
            <h3 className="fw-bold my-4">Who are we?</h3>
            <p>
              ShareTrip is the country’s first and leading online travel
              aggregator. Initially started with the name Travel Booking BD, we
              had a dream to make travel easier for people. And that is what we
              did since our inception. And now with our new, innovative, easy to
              use app, travel services are on your palm. The dynamic app lets
              you book your flight, find your perfect holiday from our thousands
              of holiday packages around the globe.
            </p>
            <p>
              ShareTrip is revolutionizing the way we book travel services. With
              ShareTrip’s website and mobile app, booking your flight, hotel or
              holiday become more fun that you would think. With exciting games
              and real rewards like free trips and air ticket makes ShareTrip
              more fun to use! You can also win TripCoin by playing games and
              booking service from ShareTrip, that you can use to avail
              discount.
            </p>
            <p>
              We have more than 100 employees, who are all experts in their
              respective fields. They have the experience and professionalism to
              understand each and every customer's requirements and fulfill it.
              With today’s era of digitalization, where everyone has a lot of
              information and choice in hand, our clients still choose us.
              Because we provide the best rates and wide range of choices for
              your accommodations and travel plans.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
