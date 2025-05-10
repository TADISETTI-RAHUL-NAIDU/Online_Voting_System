import React, { useState } from 'react';
import axios from 'axios';
import './AdminLogin.css';

function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '', // Correct field name
    password: '',
    rememberMe: false,
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:2001/api/admin/login', {
        username: formData.username,
        password: formData.password,
      });

      if (response.data.success) {
        alert(response.data.message);
        window.location.href = response.data.redirectTo;
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page section-ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12 m-auto">
            <div className="login-wrapper">
              <div className="login-tab-list">
                <h4>Admin Login</h4>
              </div>
              <div className="login-form-container">
                <div className="login-form">
                  <form onSubmit={handleSubmit}>
                    <div className="login-input-box">
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                      <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="button-box">
                      <div className="login-toggle-btn">
                        <input
                          type="checkbox"
                          name="rememberMe"
                          checked={formData.rememberMe}
                          onChange={handleChange}
                          id="rememberMe"
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                        <a href="#">Forgot Password?</a>
                      </div>
                      <button className="login-btn btn" type="submit" disabled={loading}>
                        <span>{loading ? 'Logging in...' : 'Login'}</span>
                      </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
