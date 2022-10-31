import React from 'react';
import InputField from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

describe('InputField', () => {
  test('renders InputField', () => {
    render(<InputField label="Name" placeholder="Patrick" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  test('checks the placeholder', () => {
    render(<InputField label="Home" placeholder="Patrick" />);
    expect(screen.getByPlaceholderText('Patrick')).toBeInTheDocument();
  });
});
