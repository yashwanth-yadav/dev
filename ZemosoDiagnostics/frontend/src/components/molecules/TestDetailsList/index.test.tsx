import * as React from 'react';
import { render, screen } from '@testing-library/react';
import TestDetailsList from '.';
import { TEST_DETAILS_LIST } from '../../../utils/Messages';
 
/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

test('checks whether component renders', () => {
  render(<TestDetailsList testDetailsList={TEST_DETAILS_LIST} />);
  const element = screen.getByTestId('test-details-list');
  expect(element).toBeInTheDocument();
});