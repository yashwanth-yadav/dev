import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import {NavDropDown} from "./NavDropDown";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Checking BookDetailsTabs",()=>{
  render(<NavDropDown />);
  const divElement=screen.getByRole("info");
  expect(divElement).toBeInTheDocument();
});