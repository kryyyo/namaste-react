import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Low-level planning
 * Header
 *    - Logo
 *    - Nav Items
 * Body
 *    - Search
 *    - RestaurantContainer
 *        - RestaurantCard
 *            - Img
 *            - Name of the Restaurant, Star Rating, Cuisines, Delivery Time
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact
 */

const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Editable-Photoshop-Food-Logo-Design-PNG-Transparent.png"
          alt="logo-of-the-app"
        />
      </div>
      {/* Nav Items */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

// Inline Style in JSX
/**
 * const styleCard = {
 *    backgroundColor: "#f0f0f0",
 * }
 */

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  
  return (
    // Inline Style in JSX
    <div
      className="res-card"
      // style={styleCard}
      style={{
        backgroundColor: "#f0f0f0",
      }}
    > 
      <img
        className="res-logo"
        alt="meghana-foods-logo"
        src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/21/0/fnd_pasta-istock.jpg.rend.hgtvcom.1280.720.suffix/1490188710731.jpeg"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      {/* Search */}
      <div className="search">
        Search
      </div>
      {/* Restaurant Container */}
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger, Fast food, American"
        />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);