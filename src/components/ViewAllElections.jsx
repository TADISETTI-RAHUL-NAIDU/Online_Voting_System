import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AdminSideNavbar from './AdminSideNavbar'; // Assuming you have this component
import './ViewAllElections.css'; // We'll create this CSS file next

function ViewAllElections() {
  const [elections, setElections] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchElections() {
      try {
        const response = await axios.get('http://localhost:2001/api/elections');
        setElections(response.data);
      } catch (error) {
        console.error('Error fetching elections:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchElections();
  }, []);

  const handleDelete = async (codenum) => {
    if (window.confirm('Are you sure you want to delete this election?')) {
      try {
        await axios.delete(`http://localhost:2001/api/elections/${codenum}`);
        setElections(elections.filter(e => e.codenum !== codenum));
      } catch (error) {
        console.error('Failed to delete election:', error);
        alert('Failed to delete election.');
      }
    }
  };

  const handleEdit = (id) => {
    if (window.confirm('Are you sure you want to edit this election?')) {
      navigate(`/editElection/${id}`);
    }
  };

  if (loading) return <p>Loading elections...</p>;

  return (
    <div style={{ display: 'flex' }}>
      <AdminSideNavbar />

      <div className="table-container">
        <h2>Election List</h2>
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>State</th>
              <th>District</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {elections.map(election => (
              <tr key={election.codenum}>
                <td>{election.codenum}</td>
                <td>{election.name}</td>
                <td>{election.state}</td>
                <td>{election.district ? election.district : <em>State-wide</em>}</td>
                <td>{election.startDate}</td>
                <td>{election.endDate}</td>
                <td>
                  <span className={election.active ? 'status-active' : 'status-inactive'}>
                    {election.active ? 'Active' : 'Inactive'}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(election.codenum)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(election.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewAllElections;
