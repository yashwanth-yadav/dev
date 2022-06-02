import React from "react";
import {  render, screen } from "@testing-library/react";
import Footer from "./Footer";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <Footer
        
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("Footer-container")).toBeInTheDocument();

});