import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import SearchBar from './SearchBar';

afterEach(cleanup);

describe('testing SearchBar', () => {
  it('should render the sending waves button', () => {
    render(
      <SearchBar
        jobLocation="Hyderabad"
        handleSearch={(searchLoc: string, searchSkill: string) => {
          console.log('Search log');
        }}
      />
    );
    const divElement = screen.getByRole('jobIcon');

    expect(divElement).toBeInTheDocument();
  });
});

describe('testing SearchNow', () => {
  it('should render the sending waves button', () => {
    render(
      <SearchBar
        jobLocation="Hyderabad"
        handleSearch={() => console.log('handle search')}
      />
    );

    fireEvent.click(screen.getByRole('searchIcon'));
    expect(SearchNow).toHaveBeenCalled;
  });
});

describe('testing input02', () => {
  it('should render the sending waves button', () => {
    render(
      <SearchBar
        jobLocation="Hyderabad"
        handleSearch={() => console.log('handle search')}
      />
    );

    fireEvent.click(screen.getByRole('input02'));
    expect(onChange).toHaveBeenCalled;
  });
});

describe('testing input01', () => {
  it('should render the sending waves button', () => {
    render(
      <SearchBar
        jobLocation="Hyderabad"
        handleSearch={() => console.log('handle search')}
      />
    );

    fireEvent.click(screen.getByRole('input01'));
    expect(onSearch).toHaveBeenCalled;
  });
});

function SearchNow() {
  throw new Error('Function not implemented.');
}

function onChange() {
  throw new Error('Function not implemented.');
}

function onSearch() {
  throw new Error('Function not implemented.');
}
