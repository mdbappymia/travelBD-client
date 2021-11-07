/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import useRent from "../../hooks/useRent";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useRent();
  const [orders, setOrders] = useState([]);
  // get orders by filtering email
  useEffect(() => {
    fetch(`https://travel-bangladesh.herokuapp.com/booking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  // remove a single booking order
  const handleRemove = (id) => {
    const isDeleted = window.confirm("Are you sure to delete order?");
    if (isDeleted) {
      fetch(`https://travel-bangladesh.herokuapp.com/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("Successfully Deleted");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  if (!orders.length) {
    return (
      <div className="text-center my-5">
        <h1 className="fw-bold">Empty</h1>
      </div>
    );
  }
  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold my-5">My all Orders</h1>
      <Row>
        {orders.map((order) => (
          <Col key={order._id} lg={4} sm={12}>
            <Card className="mt-3">
              <Card.Img
                className="booking-card-img"
                variant="top"
                src={order.img}
              />
              <Card.Body className="text-center">
                <Card.Title className="fw-bold">{order.name}</Card.Title>
                <Card.Text>Address: {order.address}</Card.Text>
                <Card.Text>Status: {order.status}</Card.Text>

                <Button
                  onClick={() => handleRemove(order._id)}
                  variant="primary"
                >
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrder;
