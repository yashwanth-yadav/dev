import React from 'react';
import { render, screen } from "@testing-library/react";
import { More } from "./More"; 

import "@testing-library/jest-dom"

describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <More 
         />
         );
         const divElement=screen.getByRole("info");
      
      
      expect(divElement).toBeInTheDocument();
     
    
    });
  });