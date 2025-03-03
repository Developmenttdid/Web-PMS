import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import logo from "./HSkyOps.png";

function App() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const disableBack = () => {
      window.history.pushState(null, "", window.location.href);
    };

    disableBack();
    window.addEventListener("popstate", disableBack);

    return () => {
      window.removeEventListener("popstate", disableBack);
    };
  }, []);

  const handleValidation = () => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setEmailError("Email Not Valid");
    } else {
      setEmailError("");
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      if (email === "admin@gmail.com" && password === "password") {
        navigate("/Homepage");
      } else {
        setEmailError("Invalid email or password");
      }
    }
  };

  return (
    <div className="containerlogin">
      <div className="d-flex">
        <div className="login-card">
          <div className="card-body">
            <div className="logo-container text-center">
              <img src={logo} alt="logo" className="logo img-fluid d-block mx-auto" />
            </div>
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mt-0"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                  required 
                  aria-describedby="email-error"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="password"
                  className="form-control mt-0"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  required 
                />
              </div>

              <div className="d-flex justify-content-left">
                <a href="/ForgotPassword" className="forgot-button mt-1">
                  Forgot Password?
                </a>
              </div>

              <div className="form-group d-flex justify-content-center">
                <button type="submit" className="submit-button btn btn-primary mt-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
