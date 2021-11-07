import React from "react";
import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <h1 className="text-center fw-bold my-5">Contact Us</h1>

      <Form onSubmit={handleContact}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail1">
          <Form.Label>Your Phone</Form.Label>
          <Form.Control type="number" placeholder="Your Phone" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Your Address</Form.Label>
          <Form.Control placeholder="Your Address" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword1">
          <Form.Label>Your Comments</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </Form.Group>
        <Button className="mb-5" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
