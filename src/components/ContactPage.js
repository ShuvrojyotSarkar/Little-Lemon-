import React, { useState } from "react";
import "./ContactPage.css";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you, ${formData.name}! Your message has been sent. We'll get back to you at ${formData.email}.`
    );
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Feel free to reach out with any questions
          or feedback.
        </p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
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
              Your Email:
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
              Your Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              ></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-details">
          <h2>Visit Us</h2>
          <p>
            <strong>Address:</strong> 123 Main Street, Foodie Town, FL 12345
          </p>
          <p>
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong> contact@littlelemon.com
          </p>
          <h3>Business Hours:</h3>
          <ul>
            <li>Monday - Friday: 9:00 AM - 10:00 PM</li>
            <li>Saturday - Sunday: 10:00 AM - 11:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
