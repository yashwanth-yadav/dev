import React from "react";
import Home from "./components/Home";
import ErrorBoundary from "./components/ErrorBoundry";
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PdpApp from "./components/PdpApp";
// import { Router } from "react-router";

import "./index.css";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/pdp/:id" element={<PdpApp />} />
    </Routes>
  </Router>
);

export default App;
