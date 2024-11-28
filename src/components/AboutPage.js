import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="hero-section">
        <h1>About Us</h1>
        <p>
          Welcome to Little Lemon, where we serve delightful dishes made with
          love and the finest ingredients.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="content-section">
        <div className="about-history">
          <h2>Our Story</h2>
          <p>
            Established in 2005, Little Lemon started as a small family-owned
            restaurant with a mission to bring authentic flavors and warm
            hospitality to our community. Over the years, we’ve grown, but our
            values remain the same: quality, tradition, and customer
            satisfaction.
          </p>
        </div>
        <div className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>Using fresh, locally sourced ingredients.</li>
            <li>Creating a welcoming and inclusive environment.</li>
            <li>Delivering an exceptional dining experience.</li>
          </ul>
        </div>
      </div>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of passionate chefs, friendly staff, and food
          enthusiasts dedicated to making your experience unforgettable.
        </p>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s" alt="Chef John" />
            <h3>Chef John</h3>
            <p>Executive Chef</p>

          </div>
          <div className="team-member">
            <img src="https://plus.unsplash.com/premium_photo-1664203067979-47448934fd97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8fDA%3D" alt="Chef Maria" />
            <h3>Chef Maria</h3>
            <p>Pastry Chef</p>
          </div>
          <div className="team-member">
            <img src="https://cdn.pixabay.com/photo/2023/04/21/15/42/portrait-7942151_640.jpg" alt="Alex" />
            <h3>Alex</h3>
            <p>Restaurant Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
