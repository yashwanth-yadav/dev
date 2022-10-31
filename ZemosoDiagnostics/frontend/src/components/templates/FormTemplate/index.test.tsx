import React from 'react';
import { FormTemplate } from '.';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('FormTemplate', () => {
  test('renders FormTemplate', () => {
    render(
      <MemoryRouter>
        <FormTemplate footer={<></>}>{''}</FormTemplate>
      </MemoryRouter>
    );
    expect(screen.getByTestId('form-template')).toBeInTheDocument();
  });
});
