import React from "react";
import "./navbarButtons.css";

interface NavbarButtonProps {
  buttonText: string;
}

export const NavbarButton: React.FC<NavbarButtonProps> = ({ buttonText }) => {
  return <div className="navbarButton">{buttonText}</div>;
};

export default NavbarButton;
