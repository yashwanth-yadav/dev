import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Button from '.';
import { colorOptions } from '../../../utils/Types';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select', options: colorOptions },
      defaultValue: 'grey50'
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const button = Template.bind({});
button.args = {
  children: <h1>Click</h1>,
  color: 'structuralPurple100'
};
