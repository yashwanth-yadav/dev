import React from 'react';
import { render, screen } from "@testing-library/react";
import { Author } from "./Author"; 

import "@testing-library/jest-dom"
describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <Author 
          authname="trivikram"
          />
         );
         const divElement=screen.getByRole("info");
        const ele2=  screen.getByText(/trivikram/i);
        //  ).toBeInTheDocument();
      
      expect(divElement).toBeInTheDocument();
      expect(ele2).toBeInTheDocument();
    
    });
  });