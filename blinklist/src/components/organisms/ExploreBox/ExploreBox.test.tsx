import React from "react";
import {  render, screen } from "@testing-library/react";
import ExploreBox from "./ExploreBox";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <ExploreBox
        
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("explore-container")).toBeInTheDocument();

});