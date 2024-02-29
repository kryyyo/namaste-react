import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JS Variable Initialization
  // let listOfRestaurants = [];


  // Normal JS Variable
  let listOfRestaurantsJS = [
    {
      data: {
        id: 9,
        resName: "Papa John's",
        cuisine: ["Pizza", "Italian"],
        rating: 3.8,
        deliveryTime: 38,
        costForTwo: 40000,
        cloudinaryImageId: "f62564e14944753903849c4ef673af4d"
      },
    },
    {
      data: {
        id: 10,
        resName: "Wendy's",
        cuisine: ["Burgers", "Fast Food"],
        rating: 4.3,
        deliveryTime: 32,
        costForTwo: 37000,
        cloudinaryImageId: "bs9qgsy25pn07pzn6xx1"
      },
    },
    {
      data: {
        id: 8,
        resName: "Chipotle",
        cuisine: ["Mexican", "Burritos", "Bowls"],
        rating: 4.5,
        deliveryTime: 27,
        costForTwo: 35000,
        cloudinaryImageId: "wet9zrjusmdtkk16jlrz"
      },
    },
  ];


  return (
    <div className="body">
      {/* Search */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
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