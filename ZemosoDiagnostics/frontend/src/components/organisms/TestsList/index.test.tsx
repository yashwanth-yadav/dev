import React from 'react';
import { TestsList } from '.';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('TestsList', () => {
  test('renders TestsList', () => {
    render(
      <MemoryRouter>
        <TestsList />
      </MemoryRouter>
    );
    expect(screen.getByTestId('tests-list')).toBeInTheDocument();
  });
});
