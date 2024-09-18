import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // on rerender, buttonNameReact will be a NEW variable that is why even if it is declared as const, it is modifiable
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  
  // Check online status
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-xl px-4 sm:bg-yellow-200 lg:bg-green-200">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="w-48"
          src={LOGO_URL}
          alt="logo-of-the-app"
        />
      </div>
      {/* Nav Items */}
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "✔" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
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