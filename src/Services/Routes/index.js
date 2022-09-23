import React from "react";

// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { DashBoard } from "../../view";
import { Login } from "../../view/Login";

const Roots = () => (
  <div>
    <Router>
      <Routes>
        {/* Roots path for every component */}
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  </div>
);

export { Roots };
