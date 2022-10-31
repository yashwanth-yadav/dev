import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AddressForm from '.';
import { SampleAddress } from '../../../utils/Constants';

test('checks whether component renders', () => {
  const container = render(
    <AddressForm address={SampleAddress} setAddress={jest.fn()} />
  );

  let input = container.getByPlaceholderText('11023') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(input.value).toBe('abc');

  input = container.getByPlaceholderText(
    'Mountain View ,California'
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(input.value).toBe('abc');

  input = container.getByPlaceholderText(
    'Mountain View California'
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(input.value).toBe('abc');

  input = container.getByPlaceholderText(
    '2235 California Street APT 021'
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'abc' } });
  expect(input.value).toBe('abc');
});
