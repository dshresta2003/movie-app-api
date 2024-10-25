import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const { movieTitle } = useParams();
  const [form, setForm] = useState({ date: '', time: '', tickets: 1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your tickets for ${movieTitle} have been booked!`);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Tickets for {movieTitle}</h2>
      <label>Date</label>
      <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required />
      <label>Time</label>
      <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} required>
        <option value="">Select Time</option>
        <option value="10:00 AM">10:00 AM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="4:00 PM">4:00 PM</option>
        <option value="7:00 PM">7:00 PM</option>
      </select>
      <label>Number of Tickets</label>
      <input type="number" value={form.tickets} onChange={(e) => setForm({ ...form, tickets: e.target.value })} min="1" max="10" required />
      <button type="submit" className="booking-btn">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;