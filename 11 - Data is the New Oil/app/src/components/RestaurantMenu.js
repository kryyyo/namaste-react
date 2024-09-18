import Shimmer from "./Shimmer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

// Single Responsibility of Restaurant Menu: Display the Data
const RestaurantMenu = () => {
  const { resId } = useParams();            // SR: Get the Id from the Params
  const resInfo = useRestaurantMenu(resId); // SR: Fetch The Data

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h3>
      {/* Categories Accordion */}
      {categories.map((category, index) => {
        return (
          // controlled component
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={() => {
            if (index === showIndex) {
              setShowIndex(null)
            } else {
              setShowIndex(index)
            }
          }}
        />)
      })}
    </div>
  )
}

export default RestaurantMenu;