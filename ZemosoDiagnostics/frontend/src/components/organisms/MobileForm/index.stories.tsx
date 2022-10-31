import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MobileForm } from '.';
import { Box } from '@mui/material';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Organisms/MobileForm',
  component: MobileForm
} as ComponentMeta<typeof MobileForm>;

export const mobileForm: ComponentStory<typeof MobileForm> = () => (
  <Box sx={{ width: '400px' }}>
    <MobileForm />
  </Box>
);
