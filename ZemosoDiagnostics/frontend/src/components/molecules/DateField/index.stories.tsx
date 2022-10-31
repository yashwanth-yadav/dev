import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DateField from '.';
import { Box } from '@mui/material';

export default {
  title: 'Molecules/DateField',
  component: DateField
} as ComponentMeta<typeof DateField>;

const Template: ComponentStory<typeof DateField> = (args) => (
  <Box sx={{ width: '535px' }}>
    <DateField {...args} />
  </Box>
);

export const DateField_ = Template.bind({});
DateField_.args = {
  label: 'Date of Birth'
};
