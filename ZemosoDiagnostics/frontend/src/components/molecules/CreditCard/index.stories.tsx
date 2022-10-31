import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreditCard from '.';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export default {
  title: 'Molecules/CreditCard',
  component: CreditCard
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

export const CreditCard_ = Template.bind({});
CreditCard_.args = {
  cardNumber : '1244 1234 1345 3255',
  cardHolderName : 'Yessie',
  expiryDate : '02/25'
};
