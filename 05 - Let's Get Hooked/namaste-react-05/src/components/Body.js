import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

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
};

export default Body;