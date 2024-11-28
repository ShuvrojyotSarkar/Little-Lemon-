import React from "react";
import "./MenuPage.css";

function MenuPage() {
  const appetizerItems = [
    {
      name: "Bruschetta",
      description: "Grilled bread topped with tomato and basil.",
      price: "$5.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms filled with garlic and cheese.",
      price: "$6.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Caprese Skewers",
      description: "Tomato, mozzarella, and basil on skewers.",
      price: "$4.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Garlic Knots",
      description: "Soft bread knots brushed with garlic butter.",
      price: "$3.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Fried Calamari",
      description: "Crispy calamari served with marinara sauce.",
      price: "$7.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Spinach Artichoke Dip",
      description: "Warm, creamy dip with tortilla chips.",
      price: "$6.49",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
  ];

  const mainCourseItems = [
    {
      name: "Spaghetti Carbonara",
      description: "A creamy blend of parmesan, eggs, and pancetta.",
      price: "$12.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella and basil.",
      price: "$15.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Grilled Salmon",
      description: "Fresh salmon fillet with lemon butter sauce.",
      price: "$18.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Chicken Alfredo",
      description: "Creamy Alfredo sauce over fettuccine with grilled chicken.",
      price: "$14.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
  ];

  const dessertItems = [
    {
      name: "Tiramisu",
      description: "Traditional Italian dessert with coffee and mascarpone.",
      price: "$6.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a gooey center.",
      price: "$7.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Panna Cotta",
      description: "Silky smooth Italian dessert topped with berries.",
      price: "$5.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Panna Cotta",
      description: "Silky smooth Italian dessert topped with berries.",
      price: "$5.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
  ];

  const beverageItems = [
    {
      name: "Espresso",
      description: "Rich and bold shot of Italian espresso.",
      price: "$3.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam.",
      price: "$4.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
    {
      name: "Lemonade",
      description: "Refreshing homemade lemonade.",
      price: "$2.99",
      image:
        "https://www.opportunityhome.org/wp-content/uploads/2013/03/image-alignment-150x150.jpg",
    },
  ];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>

      {/* Appetizers Section */}
      <section>
        <h2>Appetizers</h2>
        <div className="menu-grid appetizers-grid">
          {appetizerItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Course Section */}
      <section>
        <h2>Main Course</h2>
        <div className="menu-grid">
          {mainCourseItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Desserts</h2>
        <div className="menu-grid desserts-grid">
          {dessertItems.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Beverages</h2>
        <div className="menu-grid">
          {beverageItems.map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
