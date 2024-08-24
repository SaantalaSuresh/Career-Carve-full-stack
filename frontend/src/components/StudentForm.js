import React, { useState } from 'react';
import './StudentForm.css';
function StudentForm({ mentors, onAreaChange, onSubmit }) {
  const [formData, setFormData] = useState({
    student_name: '',
    area_of_interest: '',
    mentor_id: '',
    duration: 30,
    start_time: '',
  });
console.log(mentors)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    if (name === 'area_of_interest') {
      onAreaChange(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

 
  const getCurrentDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2>Book a Mentorship Session</h2>
        <div className="form-group">
          <label htmlFor="student_name">Your Name</label>
          <input
            id="student_name"
            name="student_name"
            value={formData.student_name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="area_of_interest">Area of Interest</label>
          <select
            id="area_of_interest"
            name="area_of_interest"
            value={formData.area_of_interest}
            onChange={handleChange}
            required
          >
            <option value="">Select an area</option>
            <option value="FMCG Sales">FMCG Sales</option>
            <option value="Equity Research">Equity Research</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="E-Commerce">E-Commerce</option>
            <option value="Software Development">Software Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Product Management">Product Management</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Business Analytics">Business Analytics</option>
            <option value="Artificial Intelligence">Artificial Intelligence</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Project Management">Project Management</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mentor_id">Select Mentor</label>
          <select
            id="mentor_id"
            name="mentor_id"
            value={formData.mentor_id}
            onChange={handleChange}
            required
          >
            <option value="">Choose a mentor</option>
            {mentors.map(mentor => (
              <option key={mentor.id} value={mentor.id}>
                {mentor.name} {mentor.is_premium ? '(Premium)' : ''}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="duration">Session Duration</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          >
            <option value={30}>30 minutes</option>
            <option value={45}>45 minutes</option>
            <option value={60}>60 minutes</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="start_time">Start Time</label>
          <input
            id="start_time"
            type="datetime-local"
            name="start_time"
            value={formData.start_time}
            onChange={handleChange}
            min={getCurrentDateTime()}
            required
          />
        </div>
        <button type="submit" className="submit-button">Book Session</button>
      </form>
    </div>
  );
}

export default StudentForm;
