import React from "react";
import Navbar from "../../components/navbar/navbar";
import AuthButton from "../../components/authButton/authButton";
import Input from "../../components/input/input";
import LargeButton from "../../components/largeButton/largeButton";
import "./signin.css";
import { Link } from "react-router-dom";

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
        <div className="signInEmailSection">
          <span>Email</span>
          <Input inputType="email" placeholder="aubergine@email.com" />
          <span>Password</span>
          <Input inputType="password" placeholder="********" />
        </div>
        <div className="forgotPassword">
          <span>
            <Link to="/reset-password">Forgot password?</Link>
          </span>
        </div>
        <div className="signInButton">
          <LargeButton buttonText="Sign In" />
        </div>
        <div className="signUpOption">
          <span>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
