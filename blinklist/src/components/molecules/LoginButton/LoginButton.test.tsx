import React from 'react';
import { render, screen } from "@testing-library/react";


import "@testing-library/jest-dom"
import LoginButton from './LoginButton';

describe("when rendered with `onSendWaves` prop", () => {
    it("should render the sending waves button", () => {
      render(
        <LoginButton 
         />
         );
      
      expect(
        screen.getByText(/Log In/i)
      ).toBeInTheDocument();
    });
  });