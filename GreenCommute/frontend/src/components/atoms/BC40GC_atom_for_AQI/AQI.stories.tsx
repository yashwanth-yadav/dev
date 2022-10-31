import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AQIComponent from './AQIComponent';
export default {
  title: 'atoms/AQLComponent',
  component: AQIComponent
} as ComponentMeta<typeof AQIComponent>;

const Template: ComponentStory<typeof AQIComponent> = (args) => (
  <AQIComponent {...args} />
);

export const AQI = Template.bind({});

AQI.args = {
  value: 300
};
