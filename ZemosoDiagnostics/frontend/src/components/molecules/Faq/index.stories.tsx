import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Faq } from '.';
import { Box } from '@mui/material';

export default {
  title: 'Molecules/Faq',
  component: Faq
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = (args) => (
  <Box sx={{ maxWidth: '74rem' }}>
    <Faq {...args} />
  </Box>
);

export const Faq_ = Template.bind({});
Faq_.args = {
  question: 'How soon can i get the report?'
};
