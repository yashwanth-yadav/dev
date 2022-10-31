import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Illustration from './Illustrations';

export default {
  title: 'atoms/Illustration',
  component: Illustration
} as ComponentMeta<typeof Illustration>;

const Template: ComponentStory<typeof Illustration> = (args) => (
  <Illustration {...args} />
);

export const illustration = Template.bind({});
illustration.args = {
  name: 'jobsIllustration',
  height: '400px',
  width: '300px'
};
