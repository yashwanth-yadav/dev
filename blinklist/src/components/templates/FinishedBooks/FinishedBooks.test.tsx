
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FinishedBooks from "./FinishedBooks";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("testing", () => {
  render(
    <MemoryRouter>
      <FinishedBooks
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
  expect(screen.getByTestId("FinishedBooks-page")).toBeInTheDocument();
});