import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      {/* Search */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = listOfRestaurants.filter(res => res.data.rating > 4.5);
            setListOfRestaurants(filtered);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {/* Restaurant Container */}
      <div className="res-container">
        {listOfRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
};

export default Body;