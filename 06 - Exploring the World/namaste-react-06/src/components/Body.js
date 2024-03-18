import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  // Just like a normal function
  // 1st arg: callback function
  // 2nd arg: dependency array
  // When will this useEffect be called? -> AFTER your component renders for the first time
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // currently 03/18/2024, swiggy does not have visible apis like this 
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional Chaining - good way of handling data
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (listOfRestaurants === 0 ? <Shimmer /> : 
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
};

export default Body;