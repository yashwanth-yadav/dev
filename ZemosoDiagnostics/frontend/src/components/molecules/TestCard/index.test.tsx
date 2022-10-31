import React from 'react';
import TestCard from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */


describe('Test Card', () => {
  test('renders test card', () => {
    render(<TestCard id={0} logo="covid" label="covid-test" />);
    expect(screen.getByTestId('testcard-0')).toBeInTheDocument();
  });
});
