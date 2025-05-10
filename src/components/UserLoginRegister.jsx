import React, { useState } from 'react';
import axios from 'axios';
import './UserLoginRegister.css'; // Make sure this import is correct

const UserLoginRegister = () => {
  const [activeTab, setActiveTab] = useState('login');

  // Registration form state
  const [registerData, setRegisterData] = useState({
    fullName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    mobileNumber: '',
    city: '',
    state: '',
    district: '',
    pincode: '',
    country: '',
    password: '',
    adharnumber: '',
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Messages
  const [registerMessage, setRegisterMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Handlers for input changes
  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Submit handlers
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:2001/api/user/register', registerData);
      if (res.data.success) {
        setRegisterMessage(res.data.message);
        setRegisterData({
          fullName: '',
          gender: '',
          dateOfBirth: '',
          email: '',
          mobileNumber: '',
          city: '',
          state: '',
          district: '',
          pincode: '',
          country: '',
          password: '',
          adharnumber: '',
        });
      } else {
        setRegisterMessage(res.data.message || 'Registration failed.');
      }
    } catch (error) {
      setRegisterMessage('Error during registration. Please try again.');
      console.error(error);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:2001/api/user/login', loginData);
      if (res.data.success) {
        setLoginMessage('Login successful!');
        // Redirect or further action here
      } else {
        setLoginMessage(res.data.message || 'Login failed.');
      }
    } catch (error) {
      setLoginMessage('Error during login. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="register-page section-ptb">
      <div className="container">
        <div className="login-register-wrapper">
          <div className="login-register-tab-list">
            <a
              href="#login"
              className={activeTab === 'login' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('login');
                setLoginMessage('');
                setRegisterMessage('');
              }}
            >
              Login
            </a>
            <a
              href="#register"
              className={activeTab === 'register' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('register');
                setLoginMessage('');
                setRegisterMessage('');
              }}
            >
              Register
            </a>
          </div>

          {activeTab === 'login' && (
            <div className="login-form-container">
              <form className="login-register-form" onSubmit={handleLoginSubmit}>
                <div className="login-input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="button-box">
                  <button type="submit" className="login-btn">
                    Login
                  </button>
                </div>
                {loginMessage && (
                  <p className={loginMessage.toLowerCase().includes('success') ? 'success-message' : 'error-message'}>
                    {loginMessage}
                  </p>
                )}
              </form>
            </div>
          )}

          {activeTab === 'register' && (
            <div className="register-form-container">
              <form className="login-register-form" onSubmit={handleRegisterSubmit}>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={registerData.fullName}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={registerData.gender}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={registerData.dateOfBirth}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    value={registerData.mobileNumber}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={registerData.city}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={registerData.state}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="district"
                    placeholder="District"
                    value={registerData.district}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={registerData.pincode}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={registerData.country}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="login-input-box">
                  <input
                    type="text"
                    name="adharnumber"
                    placeholder="Aadhar Number"
                    value={registerData.adharnumber}
                    onChange={handleRegisterChange}
                    required
                  />
                </div>
                <div className="button-box">
                  <button type="submit" className="register-btn">
                    Register
                  </button>
                </div>
                {registerMessage && (
                  <p className={registerMessage.toLowerCase().includes('successful') ? 'success-message' : 'error-message'}>
                    {registerMessage}
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserLoginRegister;
