import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useRent from "../../hooks/useRent";

const Login = () => {
  const { signInUsingGoogle, setError, error, setIsLoading } = useRent();
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location?.state?.from || "/";
  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redirect_uri);
        setIsLoading(false);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <Container className="mb-5 pb-lg-5 pb-0">
      <h1 className="text-center fw-bold pt-5">Please Login</h1>
      <p className="text-center text-danger">
        {error ? <small>{error}</small> : ""}
      </p>
      <div className="text-center my-5 ">
        <Button onClick={handleGoogleSignIn} variant="success">
          <FontAwesomeIcon
            className="text-info"
            icon={faGoogle}
          ></FontAwesomeIcon>{" "}
          Sign In Google
        </Button>
      </div>
    </Container>
  );
};

export default Login;
