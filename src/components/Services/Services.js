import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";

import SingleService from "../SingleService/SingleService";
import "./Services.css";
const Services = () => {
  const [services, serServices] = useState([]);
  useEffect(() => {
    fetch("https://travel-bangladesh.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => serServices(data));
  }, []);
  return (
    <Container className="my-5">
      <h1 className="text-center fw-bolder py-5">Our Tour service</h1>
      {services.length > 0 ? (
        <Row>
          {services.map((service) => (
            <Col key={service._id} lg={4} sm={12}>
              <SingleService
                key={service._id}
                service={service}
              ></SingleService>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center my-5">
          <Spinner animation="grow" />
        </div>
      )}
    </Container>
  );
};

export default Services;
