/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';
import Filter from './Filter';
import { filterItem } from '../../../messages';
import { ButtonBase } from '@mui/material';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import CheckboxComponent from '../../molecules/Checkbox/CheckboxComponent';

const filterConstants = {
  distance: [
    { id: 1, value: '0 - 10 kms', isChecked: false },
    {
      id: 2,
      value: '21 - 30 kms',
      isChecked: false
    },
    {
      id: 3,
      value: '31 - 40 kms',
      isChecked: false
    },
    {
      id: 4,
      value: '41 - 50 kms',
      isChecked: false
    }
  ],

  datePosted: [
    {
      id: 5,
      value: 'Past 24hrs',
      isChecked: false
    },
    {
      id: 6,
      value: 'Past week',
      isChecked: false
    },
    {
      id: 7,
      value: 'Past month',
      isChecked: false
    },
    {
      id: 8,
      value: 'Anytime',
      isChecked: false
    }
  ],

  jobType: [
    { id: 9, value: 'Full-Time', isChecked: false },
    { id: 10, value: 'Internship', isChecked: false },
    { id: 11, value: 'Contract', isChecked: false },
    { id: 12, value: 'Remote', isChecked: false }
  ],

  experienceLevel: [
    { id: 13, value: 'Fresher', isChecked: false },
    { id: 14, value: 'Mid-Level', isChecked: false },
    { id: 15, value: 'Director', isChecked: false },
    { id: 16, value: 'Executive', isChecked: false }
  ],
  transport: [
    { id: 17, value: 'Metro', isChecked: false },
    { id: 18, value: 'Motor Cycle', isChecked: false },
    { id: 19, value: 'Bus', isChecked: false },
    { id: 20, value: 'Car Pooling', isChecked: false }
  ]
};

afterEach(cleanup);
test('Checking filter  Rendering and functioning', () => {
  const utils = render(
    <Filter
      handleFilterButton={() => {
        console.log('Handle Save filters');
      }}
      filterConstants={filterConstants}
      openModal={true}
      handleCloseModal={() => {
        console.log('Handle Save filters');
      }}
      handleFilteredValues={(list: string[]) => {
        console.log('habdle filtered values');
      }}
      handleClearFilters={() => {
        console.log('Handle Save filters');
      }}
      handleChecked={() => {
        console.log('Handle check');
      }}
      handleSaveFilters={() => {
        console.log('Handle Save filters');
      }}
    />
  );
  const filter = utils.getByTestId('filter');
  expect(filter).toBeInTheDocument();
  const button = utils.getByRole('button', { name: /Apply/i });
  const button2 = utils.getByRole('button', { name: /Clear All/i });
  fireEvent.click(button);
  fireEvent.click(button2);
  fireEvent.click(utils.getByTestId('close'));
  utils.debug();
});
