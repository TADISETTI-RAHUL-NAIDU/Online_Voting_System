import React, { useState } from 'react';
import axios from 'axios';
import './AddElection.css'; // Import CSS for styling

function AddElection() {
  const [electionData, setElectionData] = useState({
    codenum: '',
    name: '',
    state: '',
    district: '',
    startDate: '',
    endDate: '',
    active: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setElectionData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2001/api/createElection', electionData);
      console.log('Election created:', response.data);
      // Optionally, reset the form or redirect
    } catch (error) {
      console.error('Error creating election:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Election</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="codenum">Election CodeNumber</label>
          <input
            type="text"
            className="form-control"
            id="codenum"
            name="codenum"
            value={electionData.codenum}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Election Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={electionData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            className="form-control"
            id="state"
            name="state"
            value={electionData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="district">District (optional for state-wide elections)</label>
          <input
            type="text"
            className="form-control"
            id="district"
            name="district"
            value={electionData.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            className="form-control"
            id="startDate"
            name="startDate"
            value={electionData.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={electionData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="active"
            name="active"
            checked={electionData.active}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="active">Active Election</label>
        </div>
        <button type="submit" className="btn btn-primary">Create Election</button>
      </form>
    </div>
  );
}

export default AddElection;
