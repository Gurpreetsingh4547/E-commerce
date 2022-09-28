import React from "react";

// Packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { DashBoard } from "../../view";
import { Login } from "../../view/Login";
import { PageNotFound } from "../../Components/Common/404Page/404Page";
import { ErrorBoundries } from "../../Components/Common/ErrorBoundries";

const Roots = () => (
  <div>
    <Router>
      <Routes>
        {/* Roots path for every component */}

        <Route
          exact
          path="/"
          element={(
            <ErrorBoundries>
              <DashBoard />
            </ErrorBoundries>
          )}
        />

        <Route
          exact
          path="/login"
          element={(
            <ErrorBoundries>
              <Login />
            </ErrorBoundries>
          )}
        />

        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </div>
);

export { Roots };

