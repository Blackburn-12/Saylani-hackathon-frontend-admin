import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const otpString = otp.join("");
      console.log("Entered OTP:", otpString);
      const adminLoginObj = {
        otpPassword: otpString,
      };
      const response = await axios.post(
        `http://localhost:3001/admin/login`,
        adminLoginObj,
        { withCredentials: true }
      );
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log("error in loginadmin" + error);
    }
  };
  return (
    <div className="admin-login-container">
      <form onSubmit={handleSubmit} className="otp-form">
        <span className="main-heading">Enter OTP</span>
        <p className="otp-subheading">
          We have sent a password to your given email
        </p>
        <div className="input-container">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              required
              maxLength="1"
              type="text"
              className="otp-input"
              id={`otp-input${i + 1}`}
              ref={(el) => (inputRefs.current[i] = el)}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>
        <button className="verify-button">Verify</button>
        <button onClick={() => navigate("/adminsignup")} className="exit-btn">
          ×
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
