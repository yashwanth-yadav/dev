import { ComponentStory } from '@storybook/react';
import React from 'react';
import RadioButton from './RadioButton';

export default {
  title: 'Molecules/RadioButton'
};

const Template: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const radioButton = Template.bind({});

radioButton.args = {
  label1: 'Yes',
  label2: 'No',
  title: 'Green Commute'
};
