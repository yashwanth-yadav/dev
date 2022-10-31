import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputField from '.';
import { Box } from '@mui/material';

export default {
  title: 'Molecules/Input Field',
  component: InputField
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => (
  <Box sx={{ width: '535px' }}>
    <InputField {...args} />
  </Box>
);

export const Inputfield = Template.bind({});

Inputfield.args = {
  label: 'Name',
  placeholder: 'Patrick Smith'
};
