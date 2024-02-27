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

const resList = [
  {
    data: {
      id: 1,
      resName: "Meghana Foods",
      cuisine: ["Biryani", "North Indian", "Asian"],
      rating: 4.4,
      deliveryTime: 38,
      costForTwo: 40000,
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf"
    },
  },
  {
    data: {
      id: 2,
      resName: "KFC",
      cuisine: ["American", "Fries"],
      rating: 4.8,
      deliveryTime: 40,
      costForTwo: 50000,
      cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4"
    },
  }
]

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, resName, cuisine, rating, deliveryTime, costForTwo } = resData?.data;
  
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
        height="200px"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>${costForTwo / 100} FOR TWO</h4>
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
        {resList.map(restaurant => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
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