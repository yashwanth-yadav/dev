import React from "react";
import ReactDOM from "react-dom";
import Calender from "./components/Calendar";
import ErrorBoundary from "./components/ErrorBoundary";

import "./index.css";

export const App = () => (
  <div>
    <ErrorBoundary>
      <Calender />
    </ErrorBoundary>
  </div>
);

export default App;
