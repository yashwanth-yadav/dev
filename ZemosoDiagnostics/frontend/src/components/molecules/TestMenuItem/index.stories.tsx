import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TestMenuItem } from '.';


export default {
  title: 'Molecules/TestMenuItem',
  component: TestMenuItem,
  argTypes: {
    logo: {
      control: 'select',
      options: ['test_sq', 'home_sq', 'reports_sq', 'doctor_sq']
    },
    name: {
        control: 'select',
        options: ['Home visit', '1 test included', 'Free consultation', 'Online reports']
      }
  }
} as ComponentMeta<typeof TestMenuItem>;

const Template: ComponentStory<typeof TestMenuItem> = (args) => (
  <TestMenuItem {...args} />
);

export const TestMenuItem_ = Template.bind({});
TestMenuItem_.args = {
  logo: 'test_sq',
  name: '1 test included'
};
