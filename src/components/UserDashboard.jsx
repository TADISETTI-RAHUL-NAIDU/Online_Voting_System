import React, { useEffect, useState } from 'react';
import UserSidebar from './UserSidebar'; // Convert your usersidebar.jsp similarly
import axios from 'axios';
import './UserDashboard.css';

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data from backend or get from auth context/localStorage
    async function fetchUser() {
      try {
        const response = await axios.get('http://localhost:2001/api/user/profile', { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        // Redirect or handle session expiry
        window.location.href = '/usersessionexpiry';
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="dashboard-container">
      <UserSidebar />

      <div className="content">
        {/* Welcome Card */}
        <div className="card">
          <h1>Welcome back, {user?.fullName}!</h1>
        </div>

        {/* Motivational Section */}
        <div className="motivational-section">
          <h2>Your Achievements Matter!</h2>
          <p>
            Every certificate and achievement is a step toward your success. Store them here to keep track of your
            progress and showcase your accomplishments.
          </p>
          <p>Remember, small steps lead to big results. Keep going!</p>
          <a href="/uploadachievement" className="btn btn-motivate">
            Upload Your Certificate Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
