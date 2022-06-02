import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import BookTabs from "./BooksTabs";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <BookTabs
       
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("booktabs-page")).toBeInTheDocument();
});