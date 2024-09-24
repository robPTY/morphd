import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import Documentation from "./pages/documentation/documentation";
import Resources from "./pages/resources";
import SignIn from "./pages/signin/signin";
import SignUp from "./pages/signUp/signup";
import ResetPassword from "./pages/resetPassword/resetPassword";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
