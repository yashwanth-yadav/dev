import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SelectAddress from '.';
import { ADDRESS_LIST } from '../../../utils/Messages';

describe('SelectAddress', () => {
  test('renders SelectAddress', () => {
    render(
      <SelectAddress
        addressList={ADDRESS_LIST}
        setIsInSelectAddressform={jest.fn()}
        setSelectAddressList={jest.fn()}
      />
    );
    expect(screen.getByTestId('select-address')).toBeInTheDocument();
    const option1 = screen.getAllByTestId('HOME-radio');
    const addAddress = screen.getByTestId('add-address');
    fireEvent.click(option1[0]);
    fireEvent.click(addAddress);
  });
});
