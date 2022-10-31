import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { hp } from '../../../utils/constants';
import PrimaryJobCard from './PrimaryJobCard';

export default {
  title: 'organisms/PrimaryJobCard',
  component: PrimaryJobCard
} as ComponentMeta<typeof PrimaryJobCard>;

const Template: ComponentStory<typeof PrimaryJobCard> = (args) => (
  <PrimaryJobCard {...args} />
);

export const primaryJobCard = Template.bind({});

primaryJobCard.args = {
  logo: hp,
  company: 'HP',
  jobRole: 'User Experience Designer'
};
