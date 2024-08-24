


import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Payment from './components/Payment';
import BookingView from './components/BookingView';
import ProgressBar from './components/ProgressBar';
import About from './components/About';

function App() {
  const [bookingData, setBookingData] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [bookingId, setBookingId] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchMentors();
  }, []);

  const fetchMentors = async () => {
    try {
      const response = await fetch('https://careerscarve-backend.onrender.com/api/mentors');
      const data = await response.json();
      setMentors(data);
    } catch (error) {
      console.error('Error fetching mentors:', error);
    }
  };

  const handleBookingSubmit = async (data) => {
    setBookingData(data);
    navigate('/payment');
    
    try {
      const response = await fetch('https://careerscarve-backend.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Booking created:', result);
      setBookingId(result.id); // Save the booking ID
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  const handlePaymentComplete = () => {
    console.log('Booking completed:', bookingData);
    navigate('/bookingView'); 
  };

  return (
    <div className="App">
      <ProgressBar step={window.location.pathname} />
      <Routes>
        <Route path="/" element={<Home mentors={mentors} onSubmit={handleBookingSubmit} />} />
        <Route path="/payment" element={<Payment bookingData={bookingData} onComplete={handlePaymentComplete} />} />
        <Route path="/bookingView" element={<BookingView bookingId={bookingId} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
