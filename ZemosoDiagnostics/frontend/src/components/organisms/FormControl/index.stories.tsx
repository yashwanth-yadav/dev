/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormControl from '.';

export default {
  title: 'Organisms/FormControl',
  component: FormControl
} as ComponentMeta<typeof FormControl>;

const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args} />
);
export const formControl = Template.bind({});

formControl.argTypes = {
  activeStep: {
    defaultValue: 0,
    control: 'select',
    options: [0, 1, 2]
  }
};

formControl.args = {
  buttonText: 'Save',
  day: 'Wednesday',
  month: 'March',
  toTime: '7.00',
  fromTime: '6.00',
  date: '23',
  numberOfPatients: 1,
  labName: 'Los Altos Center Lab',
  testPrice: '$1200'
};
