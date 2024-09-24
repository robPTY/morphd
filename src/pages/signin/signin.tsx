import React from "react";
import Navbar from "../../components/navbar/navbar";
import AuthButton from "../../components/authButton/authButton";
import "./signin.css";

export const SignIn: React.FC = () => {
  return (
    <div className="signInSkeleton">
      <div className="signInHeader">
        <Navbar />
      </div>
      <div className="signInBody">
        <div className="bodyHeader">
          <h1>Welcome back</h1>
        </div>
        {/*Authentication Buttons*/}
        <div className="AuthButtons">
          <AuthButton authService="Google" />
          <AuthButton authService="Github" />
        </div>
        <div className="signInDivider">
          <span>Or, sign in with your email</span>
        </div>
        <div className="signInEmailSection"></div>
      </div>
    </div>
  );
};

export default SignIn;
