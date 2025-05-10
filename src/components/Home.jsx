// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="main-wrapper">
      <header className="header-area">
        <div className="header-top-area">
          <div className="top-bar">
            <p>Welcome to Online Voting System</p>
            <p>Contact: support@votingsystem.com</p>
          </div>
        </div>

        <div className="header-bottom-area">
          <div className="logo-area">
            <h1>Voting System</h1>
          </div>
          <nav className="main-navigation">
            <ul className="nav-menu">
              <li>
                <Link to="/AdminLogin">Admin Login</Link>
              </li>
              <li>
                <Link to="/UserLoginRegister">Voter Login</Link>
              </li>
              <li>
                <Link to="/results">Results</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="hero-section">
        <h1>Welcome to the Online Voting System</h1>
        <p>Secure, transparent, and efficient voting for everyone.</p>
      </div>

      <footer className="footer-area">
        <p>&copy; 2025 Online Voting System. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
