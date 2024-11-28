import React, { useState } from 'react';
import './BookingPage.css';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    people: 1,
    specialRequests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\n\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nPeople: ${formData.people}\nSpecial Requests: ${formData.specialRequests}`
    );
  };

  return (
    <div className="booking-page">
      <h1>Reserve Your Table</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </label>
        <label>
          Email Address:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number of People:
          <input
            type="number"
            name="people"
            value={formData.people}
            onChange={handleChange}
            min="1"
            max="20"
            required
          />
        </label>
        <label>
          Special Requests:
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Add any dietary restrictions or requests..."
          ></textarea>
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingPage;
