import React from 'react';
import { render, screen } from "@testing-library/react";
import { Button007 } from "./Button007"; 

import "@testing-library/jest-dom"

describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <Button007 
          children="buton1" 
         variant="success" />
         );
      
      expect(
        screen.getByText(/buton1/i)
      ).toBeInTheDocument();
    });
  });