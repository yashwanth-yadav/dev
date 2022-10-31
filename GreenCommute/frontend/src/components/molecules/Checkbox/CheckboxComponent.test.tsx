import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxComponent from './CheckboxComponent';

test('Test -Checkbox', () => {
  render(
    <CheckboxComponent
      label={'11 - 20 kms'}
      defaultChecked={false}
      handleChecked={() => console.log('changed state')}
    ></CheckboxComponent>
  );

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toHaveTextContent('');
});
