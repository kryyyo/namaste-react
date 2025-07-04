import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional Chaining - good way of handling data
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants)
  }

  // Check online status
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline! Please check your internet connection.</h1>;
  }

  // Conditional Rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (listOfRestaurants === 0 ? <Shimmer /> : 
    <div className="body">
      {/* Search */}
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button 
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
            // Filter the restaurant cards and update the UI
            // searchText
            const filteredRestaurants = listOfRestaurants.filter(res =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
          }}>
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filtered = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
              setListOfRestaurants(filtered);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      {/* Restaurant Container */}
      <div className="flex flex-wrap">
        {filteredRestaurants.map(restaurant => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  )
};

export default Body;