import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import SecondaryJobCard from './SecondaryJobCard';
import { hp } from '../../../utils/constants';

export default {
  title: 'organisms/SecondaryJobCard',
  component: SecondaryJobCard
} as ComponentMeta<typeof SecondaryJobCard>;

const Template: ComponentStory<typeof SecondaryJobCard> = (args) => (
  <SecondaryJobCard {...args} />
);

export const secondaryJobCard = Template.bind({});

secondaryJobCard.args = {
  logo: hp,
  company: 'HP',
  jobRole: 'User Experience Designer',
  time: '30mins ago',
  city: 'Hyderabad',
  location: 'Hitec City',
  state: 'Telangana'
};
