import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useRent from "../../hooks/useRent";
import "./Appbar.css";

const AppBar = () => {
  const { user, logOut } = useRent();

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold nav-brand">
          <Link to="/">Travel BD</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About Us
            </NavLink>
            {user?.email ? (
              <>
                <NavLink className="nav-link" to="/insert-item">
                  Insert Item
                </NavLink>
                <NavLink className="nav-link" to="/my-orders">
                  My Orders
                </NavLink>
                <NavLink className="nav-link" to="/manage-all-orders">
                  Manage All Orders
                </NavLink>
                <NavLink className="nav-link" to="/profile">
                  <small>
                    Log in as:{" "}
                    <span className="text-warning fw-bold">
                      {user.displayName}
                    </span>
                  </small>
                </NavLink>
                <NavLink className="nav-link" to="/profile">
                  <img src={user.photoURL} alt="" className="profile-img" />
                </NavLink>
                <Button onClick={logOut}>Log Out</Button>
              </>
            ) : (
              <NavLink className="nav-link" to="/login">
                <Button>Login</Button>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppBar;
