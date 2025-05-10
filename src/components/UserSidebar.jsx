import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './UserSidebar.css';

function UserSidebar() {
  const location = useLocation();

  useEffect(() => {
    // Handle route changes if needed
  }, [location]);

  return (
    <aside className="sidebar" role="complementary">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <i className="fas fa-trophy"></i>
        </div>
        <div className="sidebar-title">ACTIVE HUB</div>
      </div>
      <nav>
        <ul className="sidebar-menu">
          <li className="sidebar-menu-item">
            <NavLink
              to="/userDashboard"
              className={({ isActive }) =>
                isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
              }
            >
              <i className="fas fa-home"></i>
              Home
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/vote"
              className={({ isActive }) =>
                isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
              }
            >
              <i className="fas fa-vote-yea"></i>
              Vote
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/results"
              className={({ isActive }) =>
                isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
              }
            >
              <i className="fas fa-chart-bar"></i>
              Results
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
              }
            >
              <i className="fas fa-cogs"></i>
              Admin Panel
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/userprofile"
              className={({ isActive }) =>
                isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
              }
            >
              <i className="fas fa-user"></i>
              User Profile
            </NavLink>
          </li>
          <li className="sidebar-menu-item">
            <NavLink
              to="/userlogout"
              className={({ isActive }) =>
                isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
              }
            >
              <i className="fas fa-sign-out-alt"></i>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>&copy; 2024 Active Dashboard</p>
      </div>
    </aside>
  );
}

export default UserSidebar;
