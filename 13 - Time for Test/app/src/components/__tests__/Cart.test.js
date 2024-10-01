import { fireEvent, render, screen, act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom";

globalThis.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_DATA)
}))

it("should load restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  })

  // Restaurant Menu
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  
  const accordionHeader = screen.getByText(/recommended/i);
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(11);

  const addButtons = screen.getAllByRole("button", { name: /add/i });
  fireEvent.click(addButtons[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addButtons[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  // Cart
  const addedFoodItems = screen.getAllByTestId("foodItems");
  expect(addedFoodItems.length).toBe(13); // 11 + 2 (cart items)

  // clearing the cart
  const clearCartButton = screen.getByRole("button", { name: /clear cart/i });
  fireEvent.click(clearCartButton);

  const clearedFoodItems = screen.getAllByTestId("foodItems");
  expect(clearedFoodItems.length).toBe(11);
  expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
})