import React from "react";
import "./landing.css";
import Navbar from "../components/navbar/navbar";

export const Landing: React.FC = () => {
  return (
    <div>
      <div className="landingPageHeader">
        <Navbar></Navbar>
      </div>
      <div className="landingPageBody">
        <p>Hi</p>
      </div>
    </div>
  );
};

export default Landing;
