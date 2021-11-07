import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container } from "react-bootstrap";
import "./InsertItem.css";

const InsertItem = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // insert a new item
  const onSubmit = (data) => {
    const isReady = window.confirm("Are you sure add this service?");
    if (isReady) {
      fetch("https://travel-bangladesh.herokuapp.com/services", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
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
    <Container className="my-5">
      <h2 className="text-center fw-bold text-warning my-5">
        Insert a new Tour Service
      </h2>
      <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Service Name"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          placeholder="Location"
          {...register("location", { required: true })}
        />
        {errors.location && (
          <span className="text-danger">This field is required</span>
        )}
        <textarea
          placeholder="About Place"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          placeholder="Image Url"
          {...register("img", { required: true })}
        />
        {errors.img && (
          <span className="text-danger">This field is required</span>
        )}
        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <span className="text-danger">This field is required</span>
        )}
        <br />

        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};

export default InsertItem;
