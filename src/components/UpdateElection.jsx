import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSideNavbar from './AdminSideNavbar'; // Assuming you have this component
import './UpdateElection.css'; // We'll create this CSS file next

function UpdateElection({ electionId }) {
  const [election, setElection] = useState({
    id: '',
    codenum: '',
    name: '',
    state: '',
    district: '',
    startDate: '',
    endDate: '',
    active: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Fetch election data on mount
  useEffect(() => {
    async function fetchElection() {
      try {
        const response = await axios.get(`http://localhost:2001/api/elections/${electionId}`);
        const data = response.data;
        setElection({
          id: data.id,
          codenum: data.codenum,
          name: data.name,
          state: data.state,
          district: data.district || '',
          startDate: data.startDate ? data.startDate.substring(0, 10) : '', // format yyyy-mm-dd
          endDate: data.endDate ? data.endDate.substring(0, 10) : '',
          active: data.active,
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load election data.');
        setLoading(false);
      }
    }
    if (electionId) {
      fetchElection();
    }
  }, [electionId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setElection(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');
    try {
      await axios.put(`http://localhost:2001/api/elections/${election.id}`, election);
      setSuccessMsg('Election updated successfully!');
    } catch (err) {
      setError('Failed to update election.');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: 'flex' }}>
      <AdminSideNavbar />

      <div className="container">
        <h2>Update Election</h2>

        {error && <p className="error-message">{error}</p>}
        {successMsg && <p className="success-message">{successMsg}</p>}

        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={election.id} />

          <label>Election CodeNumber</label>
          <input
            type="text"
            name="codenum"
            value={election.codenum}
            onChange={handleChange}
            required
          />

          <label>Election Name</label>
          <input
            type="text"
            name="name"
            value={election.name}
            onChange={handleChange}
            required
          />

          <label>State</label>
          <input
            type="text"
            name="state"
            value={election.state}
            onChange={handleChange}
            required
          />

          <label>District (optional)</label>
          <input
            type="text"
            name="district"
            value={election.district}
            onChange={handleChange}
          />

          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={election.startDate}
            onChange={handleChange}
            required
          />

          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={election.endDate}
            onChange={handleChange}
            required
          />

          <div className="form-check">
            <label>
              <input
                type="checkbox"
                name="active"
                checked={election.active}
                onChange={handleChange}
                className="form-check-input"
              />{' '}
              Active Election
            </label>
          </div>

          <button type="submit" className="btn">Update Election</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateElection;
