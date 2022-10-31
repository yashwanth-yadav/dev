import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AddressCard } from './index';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/AddressCard',
  component: AddressCard
} as ComponentMeta<typeof AddressCard>;

const Template: ComponentStory<typeof AddressCard> = (args) => (
  <AddressCard {...args} />
);

export const addresscard = Template.bind({});
addresscard.args = {
  addressType: 'HOME',
  address: '2235 California Street Mountain View California APT#021 - 11023',
  isSelected: true,
  isVerified: true
};
