import React from "react";
import "./landing.css";
import Navbar from "../components/navbar/navbar";

export const Landing: React.FC = () => {
  return (
    <div className="landingPageBody">
      <Navbar></Navbar>
    </div>
  );
};

export default Landing;
