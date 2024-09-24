import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import RestaurantItemList from "./RestaurantItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Dispatch an action
    dispatch(clearCart());
  }

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <RestaurantItemList items={cartItems} />
      </div>
    </div>
  )
}
export default Cart;