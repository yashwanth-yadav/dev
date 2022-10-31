import React from 'react';
import Chip from '.';
import { render, screen } from '@testing-library/react';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

describe('Chip', () => {
  test('renders Chip', () => {
    render(
      <Chip
        label={'hello'}
        id={'date'}
        variant={'filled'}
        size={'large'}
        selected={true}
      />
    );
    expect(screen.getByTestId('date')).toBeInTheDocument();
  });

  test('renders Chip', () => {
    render(
      <Chip
        label={'hello'}
        id={'date'}
        variant={'outlined'}
        size={'large'}
        selected={false}
      />
    );
    expect(screen.getByTestId('date')).toBeInTheDocument();
  });
});
