import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import morphdLogo from "../../assets/morphd_logo.png";
import NavbarButton from "./navbarButtons";

export const Navbar: React.FC = () => {
  return (
    <div className="navbarHolder">
      <div className="logoHolder">
        <Link to="/">
          <img src={morphdLogo}></img>
          <h2>Morphd</h2>
        </Link>
      </div>
      <div className="navbarLinks">
        <Link to="/resources">Resources</Link>
        <Link to="/documentation">Documentation</Link>
        <Link to="https://github.com/robPTY/morphd">Github ⭐</Link>
      </div>
      <div className="navbarButtonsList">
        {/** TODO: FIX THE BORDER ON HOVER */}
        <Link to="/signin">
          <NavbarButton buttonText="Sign In" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
