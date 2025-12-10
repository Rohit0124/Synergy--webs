import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cameraImg from "../../assets/Images/camera.png";
import drishtiLogo from "../../assets/Images/drishti-logo.png";

function LoginPage() {
  const navigate = useNavigate();

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Correct login values
  const correctEmail = "rohit123@gmail.com";
  const correctPassword = "Rohit";

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email & Password required");
      return;
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid Email Format");
      return;
    }

    // Check Correct Login
    if (email === correctEmail && password === correctPassword) {
      // SUCCESS → redirect to Home
      navigate("/home");
    } else {
      setError("Incorrect Email or Password");
    }
  };

  return (
    <div className="logincontainer">
      <div className="login-box">
        <div className="loginleft">
          <img className="camera-img" src={cameraImg} alt="" />
          <img className="logo-img" src={drishtiLogo} alt="" />
        </div>

        <div className="loginright">
          <h2>Login</h2>
          
          {error && <p className="error-msg">{error}</p>}

          <form onSubmit={handleSubmit}>

            <div className="logininput-div">
              <label>Email<span className="form-star">*</span></label>
              <input type="email" class="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
            </div>

            <div className="logininput-div">
              <label>Password<span className="form-star">*</span></label>
              <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
            </div>

            <div className="checkbox">
              <input type="checkbox" /><span> Remember me</span>
            </div>

            <button type="submit" className="loginbt">Sign in</button>
            <a className="forgot">Forgot Password ?</a>

          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
