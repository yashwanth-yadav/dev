import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CommonRoutes from './CommonRoutes';

export default {
  title: 'molecules/CommonRoutes',
  component: CommonRoutes
} as ComponentMeta<typeof CommonRoutes>;

const Template: ComponentStory<typeof CommonRoutes> = (args) => (
  <CommonRoutes {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  source: 'E Marredpally, Secunderabad',
  destination: 'Hitech City, Telanagana, Hyderabad'
};
