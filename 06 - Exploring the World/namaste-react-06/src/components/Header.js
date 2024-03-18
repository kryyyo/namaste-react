import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
   // on rerender, buttonNameReact will be a NEW variable that is why even if it is declared as const, it is modifiable
  const [buttonNameReact, setButtonNameReact] = useState("Login");

  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo-of-the-app"
        />
      </div>
      {/* Nav Items */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              setButtonNameReact(buttonNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {buttonNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
};

export default Header;