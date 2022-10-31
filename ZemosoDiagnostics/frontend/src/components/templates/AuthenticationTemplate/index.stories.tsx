import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthenticationTemplate from '.';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export default {
  title: 'Templates/AuthenticationTemplate',
  component: AuthenticationTemplate
} as ComponentMeta<typeof AuthenticationTemplate>;

const Template: ComponentStory<typeof AuthenticationTemplate> = () => (
  <AuthenticationTemplate />
);

export const AuthenticationTemplate_ = Template.bind({});
