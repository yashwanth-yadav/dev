import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PatientForm } from '.';
import { Box } from '@mui/material';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Organisms/PatientForm',
  component: PatientForm
} as ComponentMeta<typeof PatientForm>;

const Template: ComponentStory<typeof PatientForm> = () => (
  <Box sx={{ width: '583px' }}>
    <PatientForm />
  </Box>
);

export const patientForm = Template.bind({});
