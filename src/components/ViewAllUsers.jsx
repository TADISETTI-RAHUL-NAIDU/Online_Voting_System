import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminSideNavbar from './AdminSideNavbar';
import './ViewAllUsers.css';
import { useNavigate } from 'react-router-dom';

function ViewAllUsers() {
  const [users, setUsers] = useState([]);
  const [usersCount, setUsersCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:2001/api/users');
        setUsers(response.data);
        setUsersCount(response.data.length);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  const handleVerify = async (id) => {
    if (window.confirm('Are you sure you want to verify this user?')) {
      try {
        await axios.post(`http://localhost:2001/api/users/verify/${id}`);
        setUsers(users.map(user => user.id === id ? { ...user, verified: true } : user));
      } catch (error) {
        alert('Failed to verify user.');
        console.error(error);
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:2001/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
        setUsersCount(prev => prev - 1);
      } catch (error) {
        alert('Failed to delete user.');
        console.error(error);
      }
    }
  };

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ display: 'flex' }}>
      <AdminSideNavbar />

      <div className="container-fluid content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3>Registered Users</h3>
          <button className="btn btn-success" onClick={() => navigate('/admindashboard')}>
            ← Back to Dashboard
          </button>
        </div>

        <p>Total Users: {usersCount}</p>

        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Mobile</th>
                <th>Date of Birth</th>
                <th>City</th>
                <th>State</th>
                <th>District</th>
                <th>Pincode</th>
                <th>Country</th>
                <th>Aadhaar</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>{user.mobileNumber}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.district}</td>
                  <td>{user.pincode}</td>
                  <td>{user.country}</td>
                  <td>{user.adharnumber}</td>
                  <td>
                    {user.verified ? (
                      <span className="badge badge-success">Verified</span>
                    ) : (
                      <span className="badge badge-danger">Not Verified</span>
                    )}
                  </td>
                  <td>
                    {!user.verified && (
                      <button
                        className="btn btn-success btn-sm"
                        onClick={() => handleVerify(user.id)}
                      >
                        ✔ Verify
                      </button>
                    )}
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(user.id)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewAllUsers;
