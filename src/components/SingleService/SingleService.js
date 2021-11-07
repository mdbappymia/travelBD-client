import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SingleService.css";
const SingleService = ({ service }) => {
  const { _id, img, name, description, price } = service;
  return (
    <div>
      <div className="single-service text-center">
        <img className="w-100" src={img} alt="" />
        <div className="inner">
          <h3>{name}</h3>
          <p>{description.slice(0, 150)}</p>
          <h4>
            Price: <span>${price}</span>
          </h4>
          <Link to={`/booking/${_id}`}>
            <Button>Book Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
