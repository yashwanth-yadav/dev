import React from 'react';
import { render, screen } from "@testing-library/react";
import { SearchIcon } from "./SearchIcon"; 

import "@testing-library/jest-dom"
describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <SearchIcon 
         />
         );
         const divElement=screen.getByRole("info");
      
      
      expect(divElement).toBeInTheDocument();
     
    
    });
  });