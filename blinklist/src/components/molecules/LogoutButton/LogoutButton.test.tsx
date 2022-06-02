import React from 'react';
import { render, screen } from "@testing-library/react";


import "@testing-library/jest-dom"
import LogoutButton from './LogoutButton';

describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <LogoutButton 
         />
         );
      
      expect(
        screen.getByText(/LogOut/i)
      ).toBeInTheDocument();
    });
  });