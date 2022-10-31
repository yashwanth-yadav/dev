import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SignUp } from '.';
import { Box } from '@mui/material';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Organisms/SignUp',
  component: SignUp
} as ComponentMeta<typeof SignUp>;

export const signUp: ComponentStory<typeof SignUp> = () => (
  <Box sx={{ width: '400px' }}>
    <SignUp />
  </Box>
);
