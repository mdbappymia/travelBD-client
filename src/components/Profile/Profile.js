import React from "react";
import { Container } from "react-bootstrap";
import useRent from "../../hooks/useRent";
import "./Profile.css";

const Profile = () => {
  const { user } = useRent();
  return (
    <Container>
      <h1 className="text-center mt-5">Your Profile</h1>

      <div className="fw-bold profile-container">
        <p>
          Name:{" "}
          <span className="fw-normal text-success">{user?.displayName}</span>
        </p>
        <p>
          Profile Image:{" "}
          <img className="profile-pic" src={user?.photoURL} alt="" />
        </p>
        <p>
          Account Create Time:{" "}
          <span className="fw-normal text-success">
            {user?.metadata?.creationTime}
          </span>
        </p>
        <p>
          Last Login Time:{" "}
          <span className="fw-normal text-success">
            {user?.metadata?.lastSignInTime}
          </span>
        </p>
        <p>
          User mode:{" "}
          <span className="fw-normal text-success">
            {user.emailVerified ? "Verified" : "UnVerified"}
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Profile;
