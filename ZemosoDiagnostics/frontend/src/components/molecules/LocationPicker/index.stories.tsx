import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LocationPicker from './index';

export default {
  title: 'Molecules/LocationPicker',
  component: LocationPicker,
  
} as ComponentMeta<typeof LocationPicker>;

const Template: ComponentStory<typeof LocationPicker> = () => <LocationPicker  />;

export const locationPicker = Template.bind({});