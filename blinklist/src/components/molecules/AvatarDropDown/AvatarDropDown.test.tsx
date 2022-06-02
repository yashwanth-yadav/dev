import React from 'react';
import { render, screen } from "@testing-library/react";
import { AvatarDropDown } from "./AvatarDropDown"; 

import "@testing-library/jest-dom"
describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <AvatarDropDown 
         
          />
         );
         const divElement=screen.getByRole("avat");
        
      
      expect(divElement).toBeInTheDocument();
    
    
    });
  });