import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckboxComponent from './CheckboxComponent';

export default {
  title: 'Molecules/Checkbox',
  component: CheckboxComponent
} as ComponentMeta<typeof CheckboxComponent>;

const Template: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
);

export const checkbox = Template.bind({});
checkbox.args = {
  label: '11 - 20 kms'
};
