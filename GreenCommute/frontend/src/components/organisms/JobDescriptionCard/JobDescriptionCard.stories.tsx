import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import JobDescriptionCard from './JobDescriptionCard';
import { myntra } from '../../../utils/constants';

export default {
  title: 'organisms/JobDescriptionCard',
  component: JobDescriptionCard
} as ComponentMeta<typeof JobDescriptionCard>;

const Template: ComponentStory<typeof JobDescriptionCard> = (args) => (
  <JobDescriptionCard {...args} />
);

export const jobDescriptionCard = Template.bind({});

jobDescriptionCard.args = {
  logo: myntra,
  jobRole: 'User Experience Designer',
  company: 'Myntra',
  location: 'Hitech city',
  state: 'Telangana',
  city: 'Hyderabad',
  pincode: '500034',
  time: '36 min ago',
  routeSource: 'E Marredpally, Secunderabad',
  routeDestination: 'Hitech City, Telanagana, Hyderabad.',
  handleSave: () => console.log('save')
};
