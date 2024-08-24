


import React, { useState, useEffect } from 'react';
import './BookingView.css'; // Import the CSS file for styling

function BookingView() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch('https://careerscarve-backend.onrender.com/api/bookings');
      if (!response.ok) {
        throw new Error('Error fetching bookings');
      }
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const calculateEndTime = (startTime, duration) => {
    const start = new Date(startTime);
    const end = new Date(start.getTime() + duration * 60000); // Add duration in minutes
    return end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div className="booking-view">
      <h2>All Bookings</h2>
      <div className="booking-list">
        {bookings.map((booking) => (
          <div className="booking-card" key={booking.booking_id}>
            <h3>Booking #{booking.booking_id}</h3>
           
            <p><strong>Student Name:</strong> {booking.student_name}</p>
            <p><strong>Mentor Name:</strong> {booking.mentor_name || 'Not Provided'}</p>
            <p><strong>Mentor ID:</strong> {booking.mentor_id}</p>
            <p><strong>Area of Interest:</strong> {booking.area_of_interest}</p>
             <p><strong>Date:</strong> {formatDate(booking.start_time)}</p>
            <p><strong>Duration:</strong> {booking.duration} minutes</p>
            <p><strong>Start Time:</strong> {new Date(booking.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p><strong>End Time:</strong> {calculateEndTime(booking.start_time, booking.duration)}</p>
            <p><strong>Status:</strong> {booking.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingView;
