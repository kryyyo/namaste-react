import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

// Single Responsibility of Restaurant Menu: Display the Data
const RestaurantMenu = () => {
  const { resId } = useParams();            // SR: Get the Id from the Params
  const resInfo = useRestaurantMenu(resId); // SR: Fetch The Data

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
      <h3>{costForTwoMessage}</h3>
      <ul>
        {itemCards.map(item => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu;