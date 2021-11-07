import React, { useEffect, useState } from "react";
import { Container, Button, Spinner } from "react-bootstrap";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [approved, setApproved] = useState(false);
  const [services, setServices] = useState([]);
  // get all booking item
  useEffect(() => {
    fetch(`https://travel-bangladesh.herokuapp.com/booking`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [approved]);

  // update the status pending to approved
  const handleApproved = (order) => {
    const newOrder = { ...order };

    newOrder.status = "Approved";
    delete newOrder._id;

    const url = `https://travel-bangladesh.herokuapp.com/booking/${order._id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Update Successfully");
          setApproved(!approved);
        }
      });
  };
  // remove a single booking
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
  // get all services
  useEffect(() => {
    fetch("https://travel-bangladesh.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // delete a single service
  const handleServiceRemove = (id) => {
    const isDeleted = window.confirm("Are you sure to delete service?");
    if (isDeleted) {
      fetch(`https://travel-bangladesh.herokuapp.com/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("Successfully Deleted");
            const remainingService = services.filter(
              (service) => service._id !== id
            );
            setServices(remainingService);
          }
        });
    }
  };
  return (
    <Container>
      <h3 className="text-center fw-bold my-5">Manage All User Orders</h3>
      {!orders.length ? (
        <div className="text-center">
          <Spinner animation="grow"></Spinner>
        </div>
      ) : (
        ""
      )}
      {orders.map((order) => (
        <div key={order._id}>
          <div className="all-orders-item my-3 p-3">
            <p className=" mb-0 fw-bold text-info">{order.name}</p>
            <div className=" mb-0 ">
              <p className="m-0 ">User email:</p>
              <small className="text-primary">{order.email}</small>
            </div>
            <div className=" mb-0">
              <p className="m-0 ">User Name:</p>
              <small className="text-primary">{order.displayName}</small>
            </div>
            <div className=" mb-0">
              <p className="m-0">Status:</p>
              <small className="text-primary">{order.status}</small>
            </div>
            {order.status === "pending" ? (
              <Button
                className="mt-lg-0 "
                onClick={() => handleApproved(order)}
              >
                Approve Now
              </Button>
            ) : (
              <Button className="mt-lg-0 mt-3" disabled>
                Approved
              </Button>
            )}
            <Button
              className="ms-lg-3 mt-lg-0 mt-3"
              onClick={() => handleRemove(order._id)}
              variant="danger"
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
      <h3 className="text-center fw-bold my-5">Manage All Services</h3>
      {!services.length ? (
        <div className="text-center">
          <Spinner animation="grow"></Spinner>
        </div>
      ) : (
        ""
      )}
      {services.map((service) => (
        <div key={service._id}>
          <div className=" all-service-item my-3 p-3">
            <p className="me-3 mb-0 fw-bold text-info">{service.name}</p>
            <div className="me-3 mb-0 ">
              <p className="m-0 ">Location:</p>
              <small className="text-primary">{service.location}</small>
            </div>
            <div className="me-3 mb-0">
              <p className="m-0 ">Price:</p>
              <small className="text-primary">${service.price}</small>
            </div>

            <Button
              className="ms-lg-3 mt-lg-0 mt-3"
              onClick={() => handleServiceRemove(service._id)}
              variant="danger"
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ManageAllOrder;
