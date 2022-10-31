import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";
import remoteRoutes from "calender/routes";
import "./index.css";
import CalenderApp from "./components/CalenderApp";
import Home from "./components/Home";
const routes = [...remoteRoutes];
import { StyledEngineProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
const App = () => (
  <div>
    <Router>
      <Container />
      <Routes>
        <Route exact path="/calender" element={<CalenderApp />}></Route>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  </div>
);

export default App;
