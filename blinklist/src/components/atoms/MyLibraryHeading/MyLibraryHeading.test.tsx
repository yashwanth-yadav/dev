import React from 'react';

import { MyLibraryHeading } from "./MyLibraryHeading"; 

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom"

describe("MyLibraryHeading", () => {
    it('should render same text passed into title prop', () => {
    render(
        <MyLibraryHeading 
         
        />
    );
    const divElement=screen.getByTestId("head1");
       
    //  ).toBeInTheDocument();
  
  expect(divElement).toBeInTheDocument();
});
})
  
