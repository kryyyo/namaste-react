
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render Header Component with a login button", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const loginButton = screen.getByRole("button", { name: "Login" });

  // Assert
  expect(loginButton).toBeInTheDocument();
})

it("should render Header Component with cart items 0", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const cartItems = screen.getByText("Cart (0 items)");

  // Assert
  expect(cartItems).toBeInTheDocument();
})

it("should render Header Component with cart item", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const cartItems = screen.getByText(/Cart/); // with regex

  // Assert
  expect(cartItems).toBeInTheDocument();
})

it("should change Login button to Logout on click", () => {
  // Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Query
  const loginButton = screen.getByRole("button", { name: /login/i });

  // Act
  fireEvent.click(loginButton);

  // Query
  const logoutButton = screen.getByRole("button", { name: /logout/i });

  // Assert
  expect(logoutButton).toBeInTheDocument();
})