import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css";
import logo from "./logo1.svg";
import backgroundpic from "./TDI3.jpg";

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
    <div className="App">
      <div className="containerlogin">
        <div className="row d-flex justify-content-center">
          <div className="col-md">
            <img src={logo} alt="logo" className="logoterra" />
            <div className="card mt-3 login-card">
              <div className="card-body">
                <h5 className="card-title text-center">User Login</h5>
                <form id="loginform" onSubmit={loginSubmit}>
                  <div className="form-group">
                    <label className="float-start">Email address</label>
                    <input
                      type="email"
                      className="form-control mt-2"
                      placeholder="Enter email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <small className="text-danger form-text">{emailError}</small>
                  </div>
                  <div className="form-group">
                    <label className="mt-2 float-start">Password</label>
                    <input
                      type="password"
                      className="form-control mt-2"
                      placeholder="Password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="d-flex justify-content-">
                      <button className="forgot-button mt-2">Forgot Password?</button>
                    </div>
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
      </div>
    </div>
  );
}

export default App;
