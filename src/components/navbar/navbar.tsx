import React from "react";
import "./navbar.css";
import morphdLogo from "../../assets/morphd_logo.png";

export const Navbar: React.FC = () => {
  return (
    <div className="navbarHolder">
      <div className="logoHolder">
        <a>
          <img src={morphdLogo}></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
