import React from "react";
import {  render, screen } from "@testing-library/react";
import Header from "./Header";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <Header
        
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("Header-container")).toBeInTheDocument();

});