import React from 'react';
import { render, screen } from "@testing-library/react";
import ArrowDownIcon from "./ArrowDownIcon";

import "@testing-library/jest-dom"

describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <ArrowDownIcon 
        
          />
         );
         const divElement=screen.getByTestId("add");
       
        //  ).toBeInTheDocument();
      
      expect(divElement).toBeInTheDocument();
     
    
    });
  });