import React from 'react';
import { render, screen } from "@testing-library/react";


import "@testing-library/jest-dom"
import BookTitle from './BookTitle';
describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <BookTitle 
          title="mahabarat"
          />
         );
         const divElement=screen.getByRole("info");
        const ele2=  screen.getByText(/mahabarat/i);
        //  ).toBeInTheDocument();
      
      expect(divElement).toBeInTheDocument();
      expect(ele2).toBeInTheDocument();
    
    });
  });