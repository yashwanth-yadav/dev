import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import CabFareListItem from './CabFareListItem';
import { ola } from '../../../utils/constants';

export default {
  title: 'molecules/CabFareListItem',
  component: CabFareListItem
} as ComponentMeta<typeof CabFareListItem>;

const Template: ComponentStory<typeof CabFareListItem> = (args) => (
  <CabFareListItem {...args} />
);

export const olaCabFare = Template.bind({});

olaCabFare.args = {
  cabIcon: ola
};
