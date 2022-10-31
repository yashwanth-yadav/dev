import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderComponent from './Header';

export default {
  title: 'organisms/HeaderComponent',
  component: HeaderComponent
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = () => (
  <HeaderComponent />
);

export const Header = Template.bind({});
