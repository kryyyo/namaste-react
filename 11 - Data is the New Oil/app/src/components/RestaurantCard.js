import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData.info;
  const { deliveryTime } = sla;
  
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400 bg-slate-50"
    > 
      <img
        className="rounded-lg"
        alt={`${name}-logo`}
        height="200px"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  )
};

// Higher Order Component

// input - RestaurantCard => RestaurantCardOpen
export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-600 text-white p-2 m-2 rounded-lg">Open</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;