import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LabDetailsCard from '.';
import { LAB_DETAILS_CARDS } from '../../../utils/Constants';

export default {
  title: 'Molecules/LabDetailsCard',
  component: LabDetailsCard
} as ComponentMeta<typeof LabDetailsCard>;

const Template: ComponentStory<typeof LabDetailsCard> = (args) => (
  <LabDetailsCard {...args} />
);

export const LabDetailCard = Template.bind({});

LabDetailCard.args = {
  selected: false,
  lab: LAB_DETAILS_CARDS[0]
};
