import React from 'react';
import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar"; 

import "@testing-library/jest-dom"
describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <Avatar 
  
          />
         );
         const divElement=screen.getByRole("info");
     
      
      expect(divElement).toBeInTheDocument();
   
    
    });
  });