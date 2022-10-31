import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AQIList from './AQIList';

export default {
  title: 'molecules/AQIList',
  component: AQIList
} as ComponentMeta<typeof AQIList>;

const Template: ComponentStory<typeof AQIList> = (args) => (
  <AQIList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  items: [
    {
      city: 'Mumbai',
      AQI: 894
    },
    {
      city: 'Hyderabad',
      AQI: 953
    }
  ],
  step: 2,
  city2: [
    {
      city: 'Mumbai',
      AQIIndex: 894
    },
    {
      city: 'Hyderabad',
      AQIIndex: 953
    }
  ]
};
