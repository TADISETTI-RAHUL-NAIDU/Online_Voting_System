import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSideNavbar.css';

function AdminSideNavbar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <i className="fas fa-cogs"></i>
        <span className="sidebar-title">Admin Panel</span>
      </div>
      <h2>Navigation</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/adminDashboard" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-tachometer-alt"></i> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/viewallusers" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-users"></i> Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddElection" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-user"></i> Add Election
          </NavLink>
        </li>
        <li>
          <NavLink to="/viewallelections" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-user"></i> View All Elections
          </NavLink>
        </li>
        <li>
          <NavLink to="/viewAllAchievements" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-trophy"></i> Add Candidate
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddClubdata" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-plus-circle"></i> Add New Club
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminlogout" className={({ isActive }) => (isActive ? 'active text-danger' : 'text-danger')}>
            <i className="fas fa-sign-out-alt"></i> Logout
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminsettings" className={({ isActive }) => (isActive ? 'active' : '')}>
            <i className="fas fa-cogs"></i> Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideNavbar;
