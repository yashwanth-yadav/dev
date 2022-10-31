import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestimonialCard from '.';
import { NAME, PLACE, FEEDBACK } from '../../../utils/Messages';
import { Box } from '@mui/material';
import theme from '../../../theme';


export default {
  title: 'Molecules/TestimonialCard',
  component: TestimonialCard
} as ComponentMeta<typeof TestimonialCard>;

const Template: ComponentStory<typeof TestimonialCard> = (args) => (
<Box sx={{ width: theme.spacing(95) }}>
    <TestimonialCard {...args} />
  </Box>
);

export const card = Template.bind({});

card.argTypes = {
  name: {
    defaultValue: 'avatar',
  },
  feedback: {
    defaultValue: FEEDBACK
  },
  username: {
    defaultValue: NAME
  },
  place: {
    defaultValue: PLACE
  }
};
