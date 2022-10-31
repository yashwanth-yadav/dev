import React from 'react';
import { LabTestsForm } from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import { LAB_DETAILS_CARDS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

describe('LabTestsForm', () => {
  test('renders LabTestsForm', () => {
    render(
      <LabTestsForm
        handleSelectedlab={jest.fn()}
        selectedLab={0}
        labsData={LAB_DETAILS_CARDS}
      />
    );
    expect(screen.getByTestId('lab-tests-form')).toBeInTheDocument();

    const labDetailsCard = screen.getByTestId('lab-details-card-0');
    fireEvent.click(labDetailsCard);
    fireEvent.click(labDetailsCard);
  });
});
