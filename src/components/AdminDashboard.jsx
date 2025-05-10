
import React, { useEffect, useState } from 'react';
import AdminSideNavbar from './AdminSideNavbar'; // You will create this component
import './AdminDashboard.css'; // CSS moved here

function AdminDashboard() {
  const [stats, setStats] = useState({
    achievementCount: 0,
    usersCount: 0,
    verifiedStudentCount: 0,
    nonVerifiedStudentCount: 0,
  });

  useEffect(() => {
    // Fetch dashboard stats from backend API
    fetch('http://localhost:2001/api/admin/dashboard-stats')
      .then(res => res.json())
      .then(data => {
        setStats({
          achievementCount: data.achievementCount,
          usersCount: data.usersCount,
          verifiedStudentCount: data.verifiedStudentCount,
          nonVerifiedStudentCount: data.nonVerifiedStudentCount,
        });
      })
      .catch(err => console.error('Error fetching dashboard stats:', err));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <AdminSideNavbar />

      <div className="dashboard-content">
        <div className="dashboard-header">
          <h1>Dashboard Overview</h1>
          <div>
            <span>Welcome, Admin</span>
          </div>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <i className="fas fa-trophy"></i>
            <div className="stat-card-content">
              <h3>Total Users</h3>
              <p>Total Users: {stats.achievementCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <i className="fas fa-user-edit"></i>
            <div className="stat-card-content">
              <h3>Total Elections</h3>
              <p>Total Elections: {stats.usersCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <i className="fas fa-user-check"></i>
            <div className="stat-card-content">
              <h3>Total Candidates</h3>
              <p>{stats.verifiedStudentCount}</p>
            </div>
          </div>

          <div className="stat-card">
            <i className="fas fa-user-times"></i>
            <div className="stat-card-content">
              <h3>Total Votes</h3>
              <p>{stats.nonVerifiedStudentCount}</p>
            </div>
          </div>
        </div>

        {/* You can add Recent Activity Table here later */}
      </div>
      
    </div>
  );
}

export default AdminDashboard;
