



import React from 'react';
import './ProgressBar.css';
import { FaHome, FaCreditCard, FaCheckCircle, FaList, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function ProgressBar({ step, paymentStatus }) {
  const steps = [
    { name: 'Home', icon: <FaHome />, path: '/' },
    { name: 'Payment', icon: <FaCreditCard />, path: '/payment' },
    { name: 'All Bookings', icon: <FaList />, path: '/bookingView' },
    { name: 'About', icon: <FaInfoCircle />, path: '/about' }, 
  ];

  return (
    <div className="progress-bar">
      {steps.map((s) => (
        <Link
          key={s.name}
          to={s.path}
          className={`step ${s.path === step ? 'active' : ''}`}
        >
          <div className="step-icon">{s.icon}</div>
          <div className="step-name">{s.name}</div>
          {s.name === 'Payment' && step === s.path && paymentStatus === 'completed' && (
            <div className="payment-status">
              <FaCheckCircle className="status-icon" />
              Payment Completed
            </div>
          )}
        </Link>
      ))}
    </div>
  );
}

export default ProgressBar;
