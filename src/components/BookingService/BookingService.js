/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./BookingService.css";
import useRent from "../../hooks/useRent";

const BookingService = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useRent();
  const { name, img, description, location } = service;
  const { email, displayName } = user;
  // get the single service
  useEffect(() => {
    fetch(`https://travel-bangladesh.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  // insert a new booking
  const onSubmit = (data) => {
    const isReady = window.confirm("Are you sure?");

    if (isReady) {
      if (!data.email) {
        data.email = email;
      }
      if (!data.displayName) {
        data.displayName = displayName;
      }
      const status = "pending";
      const bookingItem = { ...data, name, img, status };
      fetch("https://travel-bangladesh.herokuapp.com/booking", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingItem),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.acknowledged) {
            alert("Service added successfully");
          }
        });
      reset();
    }
  };

  return (
    <>
      {service._id ? (
        <Container>
          <Row>
            <Col sm={12} lg={6}>
              <h1 className="mt-5 text-center fw-bold">Booking Form</h1>
              <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input
                  defaultValue={displayName}
                  disabled
                  {...register("displayName")}
                />
                {errors.displayName && (
                  <span className="text-danger">This field is required</span>
                )}
                <label>Email:</label>
                <input defaultValue={email} disabled {...register("email")} />
                {errors.email && (
                  <span className="text-danger">This field is required</span>
                )}
                <label>Travel Date:</label>
                <input type="date" {...register("date", { required: true })} />
                {errors.date && (
                  <span className="text-danger">This field is required</span>
                )}
                <label>Address:</label>
                <input {...register("address", { required: true })} />
                {errors.address && (
                  <span className="text-danger">This field is required</span>
                )}
                <label>Mobile No:</label>
                <input
                  type="number"
                  {...register("mobile", { required: true })}
                />
                {errors.mobile && (
                  <span className="text-danger">This field is required</span>
                )}
                <Button className="mt-3" type="submit">
                  Submit
                </Button>
              </form>
            </Col>
            <Col sm={12} lg={6}>
              <div>
                <img className="booking-service-image" src={img} alt="" />
                <h2>Place Name: {name}</h2>
                <h4>Location: {location}</h4>
                <p>
                  <small>{description}</small>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="text-center my-5">
          <Spinner animation="grow" />
        </div>
      )}
    </>
  );
};

export default BookingService;
