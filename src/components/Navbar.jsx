// import React from "react";
import Logo from "../assets/PerfumeryAccentLogo.svg";
import CartIcon from "../assets/PerfumeryCart.svg";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <div>
      <div className="container navbar">
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="" />
        </Link>
        <span className="cart-icon">
          <Link to={"/Cart"} className="cart-link">
            <img src={CartIcon} alt="" />
            {cartItems.length > 0 && <p>{cartItems.length}</p>}
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
