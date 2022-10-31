import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { search } from '../../../utils/constants';

import '@testing-library/jest-dom';
import IconButtonAtom from './IconButtonAtom';
import Icons from '../Icons/Icons';

test('renders an startIcon', () => {
  render(
    <IconButtonAtom
      sx={{ height: '44px', width: '44px' }}
      startIcon={<Icons icon={search} />}
    />
  );
  const element = screen.getByRole('img');
  expect(element).toBeInTheDocument();
});

test('renders an endicon', () => {
  render(
    <IconButtonAtom
      sx={{ height: '44px', width: '44px' }}
      endIcon={<Icons icon={search} />}
    />
  );
  const element = screen.getByRole('img');
  expect(element).toBeInTheDocument();
});

test('renders an endicon', () => {
  render(
    <IconButtonAtom
      sx={{ height: '44px', width: '44px' }}
      startIcon={<Icons icon={search} />}
      endIcon={<Icons icon={search} />}
    >
      {'search'}
    </IconButtonAtom>
  );
  const element = screen.getByText('search');
  expect(element).toBeInTheDocument();
});
