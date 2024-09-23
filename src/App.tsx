import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Documentation from "./pages/documentation";
import Resources from "./pages/resources";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
};

export default App;
