import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import theme from '../../../theme';
import SearchCurrentLocation from './SearchCurrentLocation';

export default {
  title: 'molecules/SearchCurrentLocation',
  component: SearchCurrentLocation
} as ComponentMeta<typeof SearchCurrentLocation>;

const Template: ComponentStory<typeof SearchCurrentLocation> = (args) => (
  <SearchCurrentLocation {...args} />
);

export const searchCurrentLocation = Template.bind({});

searchCurrentLocation.args = {
  currentLocation: 'East Maredpally, Secunderabad',
  bgColor: theme.palette.alpha400.main
};
