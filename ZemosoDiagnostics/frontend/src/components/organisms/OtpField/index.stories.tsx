import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OtpField } from '.';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Organisms/OtpField',
  component: OtpField
} as ComponentMeta<typeof OtpField>;

export const otpField: ComponentStory<typeof OtpField> = () => <OtpField />;
