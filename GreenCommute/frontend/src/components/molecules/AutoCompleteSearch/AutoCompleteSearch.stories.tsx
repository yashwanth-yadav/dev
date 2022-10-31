import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import AutoCompleteSearch from './AutoCompleteSearch';

export default {
  title: 'molecules/AutoCompleteSearch',
  component: AutoCompleteSearch
} as ComponentMeta<typeof AutoCompleteSearch>;

const Template: ComponentStory<typeof AutoCompleteSearch> = (args) => (
  <AutoCompleteSearch {...args} />
);

export const currentLocation = Template.bind({});

const city = [
  { name: 'Hyderabad', AQIIndex: 333 },
  { name: 'Banglore', AQIIndex: 345 }
];

currentLocation.args = {
  label: 'Where do  you stay ?',
  placeholder: 'Enter your Location',
  options: ['New Delhi', 'Bangalore', 'Hyderabad'],
  chips: false,
  aqi_data: city,

  setCity: (city) => {
    console.log(city);
  }
};

export const jobLocations = Template.bind({});

jobLocations.args = {
  aqi_data: city,
  label: 'Where do you want to work?',
  placeholder: 'Enter your job location',
  options: ['New Delhi', 'Bangalore', 'Hyderabad'],
  chips: true,
  setCity: (city) => {
    console.log(city);
  }
};

export const skills = Template.bind({});

skills.args = {
  label: 'What do you want to do?',
  placeholder: 'Enter your skills',
  options: ['UI/UX Designer', 'Graphic Designer', 'DevOps'],
  chips: true,

  aqi_data: city,

  setCity: (city) => {
    console.log(city);
  }
};
