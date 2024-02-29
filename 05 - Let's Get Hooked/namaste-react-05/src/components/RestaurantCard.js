import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, resName, cuisine, rating, deliveryTime, costForTwo } = resData?.data;
  
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    > 
      <img
        className="res-logo"
        alt="meghana-foods-logo"
        height="200px"
        src={`${CDN_URL}/${cloudinaryImageId}`}
      />
      <h3>{resName}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>${costForTwo / 100} FOR TWO</h4>
    </div>
  )
};

export default RestaurantCard;