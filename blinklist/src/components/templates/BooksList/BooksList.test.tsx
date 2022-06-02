import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BooksList from "./BooksList";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <BooksList
        details={[
          {
            id: 5,
            image: "https://www.linkpicture.com/q/book6.png",
            name: "Loving Your Business",
            author: "Debbie King",
            time: "13-minute read",
            finished: true,
            prog:13,
            added: false,
          },
        ]}
        setBooks={() => {
          console.log("Handle finish triggerd");
        }}
      />
    </MemoryRouter>
  );
  expect(screen.getByTestId("BooksList-page")).toBeInTheDocument();
});