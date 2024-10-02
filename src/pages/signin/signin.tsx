import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import AuthButton from "../../components/authButton/authButton";
import Input from "../../components/input/input";
import LargeButton from "../../components/largeButton/largeButton";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/authContext";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth() ?? {};
  const navigate = useNavigate();
  let loginStatus = "";
  const processSubmit = async () => {
    try {
      if (login) {
        await login(email, password);
        navigate("/library");
      }
    } catch (error) {
      console.error("Failed to sign in:", error);
      loginStatus = "Failed to sign in. Please try again";
      const errorText = document.getElementById("wrongLogin");
      if (errorText) {
        (errorText as HTMLElement).style.display = "block";
        (errorText as HTMLElement).innerHTML =
          "Faield to sign in. Please try again";
      }
    }
  };

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
          <Input
            inputType="email"
            placeholder="aubergine@email.com"
            value={email}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setEmail(e.target.value)}
          />
          <span>Password</span>
          <Input
            inputType="password"
            placeholder="********"
            value={password}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgotPassword">
          <span id="wrongLogin">{loginStatus}</span>
          <span>
            <Link to="/reset-password">Forgot password?</Link>
          </span>
        </div>
        <div className="signInButton">
          <LargeButton buttonText="Sign In" onClick={processSubmit} />
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
