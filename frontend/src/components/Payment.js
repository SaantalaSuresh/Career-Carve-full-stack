


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';
import { FaUser, FaClock, FaRupeeSign, FaCalendarAlt, FaRegClock } from 'react-icons/fa';

function Payment({ bookingData, onComplete }) {
  const navigate = useNavigate();

  const calculateCost = () => {
    const baseCost = bookingData.duration === 30 ? 2000 : 
                     bookingData.duration === 45 ? 3000 : 4000;
    const premiumMultiplier = bookingData.is_premium ? 1.5 : 1;
    return baseCost * premiumMultiplier;
  };

  useEffect(() => {
    if (!bookingData) {
      alert("No Payment data available. Redirecting to home.");
      navigate("/");
    }
  }, [bookingData, navigate]);
  console.log(bookingData)

  if (!bookingData) {
    return null; // Prevent rendering if there is no bookingData
  }

  const { student_name, mentor_id, duration, is_premium, start_time, end_time } = bookingData;

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <div className="payment-details">
        <div className="payment-item">
          <FaUser className="icon" />
          <span>Student Name: <strong>{student_name}</strong></span>
        </div>
        <div className="payment-item">
          <FaUser className="icon" />
          <span>Session with Mentor ID: <strong>{mentor_id}</strong></span>
        </div>
        <div className="payment-item">
          <FaClock className="icon" />
          <span>Duration: <strong>{duration} minutes</strong></span>
        </div>
        <div className="payment-item">
          <FaCalendarAlt className="icon" />
          <span>Start Time: <strong>{new Date(start_time).toLocaleString()}</strong></span>
        </div>
        
        <div className="payment-item">
          <FaRupeeSign className="icon" />
          <span>Cost: <strong>₹{calculateCost()}</strong></span>
        </div>
        <div className="payment-item">
          <FaClock className="icon" />
          <span>Premium: <strong>{is_premium ? "Yes" : "No"}</strong></span>
        </div>
      </div>
      <button className="payment-button" onClick={onComplete}>
        Complete Payment
      </button>
    </div>
  );
}

export default Payment;
