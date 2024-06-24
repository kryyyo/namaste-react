import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
   // on rerender, buttonNameReact will be a NEW variable that is why even if it is declared as const, it is modifiable
  const [buttonNameReact, setButtonNameReact] = useState("Login");
  
  // Check online status
  const onlineStatus = useOnlineStatus();

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
          <li>
            Online Status: {onlineStatus ? "✔" : "🔴"}
          </li>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
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