import React from "react";
import Logo from "../assets/PerfumeryAccentLogo.svg";
import CartIcon from "../assets/PerfumeryCart.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="container navbar">
        <Link to={"/"}>
          <img className="logo" src={Logo} alt="" />
        </Link>
        <Link to={"/Cart"}>
          <img src={CartIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
