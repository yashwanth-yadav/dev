import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TestCard from '.';
import { Box } from '@mui/material';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

export default {
  title: 'Molecules/TestCard',
  component: TestCard
} as ComponentMeta<typeof TestCard>;

const Template: ComponentStory<typeof TestCard> = (args) => (
  <Box sx={{ width: '17.688rem' }}>
    <TestCard {...args} />
  </Box>
);

export const TestCard_ = Template.bind({});
TestCard_.args = {
  logo: 'covid',
  label: 'Covid RTPCR'
};
