import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LabTestsForm } from '.';
import { Box } from '@mui/material';
import { LAB_DETAILS_CARDS } from '../../../utils/Constants';

export default {
  title: 'Organisms/LabTestsForm',
  component: LabTestsForm
} as ComponentMeta<typeof LabTestsForm>;

export const labTestsForm: ComponentStory<typeof LabTestsForm> = () => (
  <Box sx={{ width: '583px' }}>
    <LabTestsForm
      labsData={LAB_DETAILS_CARDS}
      handleSelectedlab={(labdetails) => {
        console.log('LAbdetails');
      }}
      selectedLab={0}
    />
  </Box>
);
