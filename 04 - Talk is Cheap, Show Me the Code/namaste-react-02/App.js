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

const resObj = {
  data: {
    resName: "Meghana Foods",
    cuisine: ["Biryani", "North Indian", "Asian"],
    rating: 4.4,
    deliveryTime: 38,
    costForTwo: 40000,
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf"
  },
}

const RestaurantCard = (props) => {
  const { resData } = props;
  
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
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.data.cloudinaryImageId}`}
      />
      <h3>{resData.data.resName}</h3>
      <h4>{resData.data.cuisine.join(", ")}</h4>
      <h4>{resData.data.rating} stars</h4>
      <h4>{resData.data.deliveryTime} minutes</h4>
      <h4>${resData.data.costForTwo / 100} FOR TWO</h4>
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
        <RestaurantCard resData={resObj} />
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