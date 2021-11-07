import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import notFound from "./giphy.gif";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <img className="not-found-image" src={notFound} alt="" />
      <div>
        <Link to="/">
          <Button className="my-5">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
