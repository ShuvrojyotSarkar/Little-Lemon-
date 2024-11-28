import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/Menu");
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Savor the Flavor</h1>
          <p>Experience the essence of Mediterranean cuisine.</p>
          <button className="cta-button" onClick={handleMenuClick}>
            View Menu
          </button>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="featured-dishes">
        <h2>Our Specials</h2>
        <div className="dishes-grid">
          <div className="card">
            <div className="card-text">
              <h2>Lemon Tart</h2>
              <p>A sweet and tangy dessert with a buttery crust.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="card-image">
              <img src={require("./assets/Image 135.jpg")} alt="Card 1" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h2>Citrus Salad</h2>
              <p>Fresh greens with a mix of oranges and grapefruit.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="card-image">
              <img src={require("./assets/Image 136.jpg")} alt="Card 2" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h2>Lemonade Sorbet</h2>
              <p>Refreshing sorbet made with fresh lemons.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="card-image">
              <img src={require("./assets/Image 137.jpg")} alt="Card 3" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h2>Grilled Salmon</h2>
              <p>Salmon fillet with a lemon-dill sauce.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="card-image">
              <img src={require("./assets/Image 138.jpg")} alt="Card 4" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h2>Lemon Chicken</h2>
              <p>Tender chicken with a zesty lemon glaze.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="card-image">
              <img src={require("./assets/Image 139.jpg")} alt="Card 5" />
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h2>Lemon Basil Pasta</h2>
              <p>Pasta tossed with lemon and fresh basil.</p>
              <button className="cta-button">Learn More</button>
            </div>
            <div className="card-image">
              <img src={require("./assets/Image 140.jpg")} alt="Card 6" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>Join Our Newsletter</h2>
        <p>
          Sign up to receive exclusive promotions and the latest updates from
          Little Lemon.
        </p>
        <button className="cta-button">Subscribe Now</button>
      </section>

      {/* Call to Action */}
      <section className="reservation-cta">
        <h2>Taste the Citrus Magic</h2>
        <p>
          Reserve your table in advance and enjoy a memorable dining experience.
        </p>
        <button className="cta-button" >
          Subscribe
        </button>
      </section>
    </div>
  );
}

export default HomePage;
