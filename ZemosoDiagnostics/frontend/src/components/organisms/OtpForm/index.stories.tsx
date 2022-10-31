import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OtpForm } from '.';
import { Box } from '@mui/material';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Organisms/OtpForm',
  component: OtpForm
} as ComponentMeta<typeof OtpForm>;

export const otpForm: ComponentStory<typeof OtpForm> = () => (
  <Box sx={{ width: '400px' }}>
    <OtpForm />
  </Box>
);
