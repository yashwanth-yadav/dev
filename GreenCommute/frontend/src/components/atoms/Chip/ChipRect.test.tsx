import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import ChipRect from './ChipRect';

afterEach(cleanup);
test('Checking Read title Rendering', () => {
  render(
    <ChipRect
      title="UI/UX Designer"
      handleDelete={() => console.log('delete')}
    />
  );
  const text = screen.getByText('UI/UX Designer');
  expect(text).toBeInTheDocument();
});

describe('when rendered with `onSendWaves` prop', () => {
  it('should render the sending waves button', () => {
    render(<ChipRect title="HYD" handleDelete={() => console.log('delete')} />);

    fireEvent.click(screen.getByRole('chip'));
    expect(handleClick).toHaveBeenCalled;
  });
});

function handleClick() {
  throw new Error('Function not implemented.');
}

describe('when rendered with `onSendWaves` prop', () => {
  it('should render the sending waves button', () => {
    render(<ChipRect title="HYD" handleDelete={() => console.log('delete')} />);

    fireEvent.click(screen.getByTestId('close'));
    expect(handleDelete).toHaveBeenCalled;
  });
});

function handleDelete() {
  throw new Error('Function not implemented.');
}
