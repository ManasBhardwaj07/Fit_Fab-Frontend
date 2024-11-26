import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isOtpLogin, setIsOtpLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Toggle between OTP and Password login methods
  const toggleLoginMethod = () => {
    setIsOtpLogin(!isOtpLogin);
    resetFields();
  };

  // Reset fields when toggling login methods
  const resetFields = () => {
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    setOtpError('');
    setPassword('');
    setLoginError('');
  };

  // Send OTP
  const sendOtp = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setOtpError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost/Backend/Otp/sendOTP.php',
        { email },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.status === 'success') {
        setOtpSent(true);
        setOtpError('');
      } else {
        setOtpError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setOtpError('Error sending OTP. Please try again.');
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!otp) {
      setOtpError('Please enter the OTP.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost/Backend/Otp/verifyOTP.php',
        { otp, email },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.status === 'success') {
        setOtpVerified(true);
        setOtpError('');
        navigate('/');
      } else {
        setOtpError(response.data.message);
        setOtp('');
        setOtpSent(false);
      }
    } catch (error) {
      console.error(error);
      setOtpError('Error verifying OTP. Please try again.');
    }
  };

  // Handle Password Login
  const handlePasswordLogin = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setLoginError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setLoginError('Please enter your password.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost/Backend/auth/login.php',
        { email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.data.status === 'success') {
        setLoginError('');
        navigate('/');
      } else {
        setLoginError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setLoginError('Error during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        {isOtpLogin ? (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {otpSent ? (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  className="input-field"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button className="btn" onClick={verifyOtp}>
                  Verify OTP
                </button>
              </>
            ) : (
              <button className="btn" onClick={sendOtp}>
                Send OTP
              </button>
            )}
            {otpError && <p className="error-message">{otpError}</p>}
            <button className="toggle-btn" onClick={toggleLoginMethod}>
              Log in using Password
            </button>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="Enter Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" onClick={handlePasswordLogin}>
              Log In
            </button>
            {loginError && <p className="error-message">{loginError}</p>}
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
            <button className="toggle-btn" onClick={toggleLoginMethod}>
              Log in using OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
