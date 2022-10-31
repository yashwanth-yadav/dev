import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignUpOptions } from './index';
import { Box } from '@mui/material';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/SignUpOptions',
  component: SignUpOptions
} as ComponentMeta<typeof SignUpOptions>;

const Template: ComponentStory<typeof SignUpOptions> = () => (
  <Box sx={{ width: '21rem' }}>
    <SignUpOptions />
  </Box>
);

export const signUpOptions = Template.bind({});
