import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import BookPage from "./BookPage";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";


afterEach(cleanup);
test("Render SearchIcon Button", () => {
  render(
    <MemoryRouter>
      <BookPage
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
  // expect(screen.getByTestId("book-detail-page")).toBeInTheDocument();
  expect( screen.getByText("Finished Reading")).toBeInTheDocument();
});