import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CreditCardDetails from '.';
import { CARD_DETAILS_INFO, PAYMENT_OPTIONS_LIST } from '../../../utils/Messages';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */
export default {
  title: 'Organisms/CreditCardDetails',
  component: CreditCardDetails,
} as ComponentMeta<typeof CreditCardDetails>;

const Template: ComponentStory<typeof CreditCardDetails> = (args) => (
  <CreditCardDetails  cardDetailsInfo={CARD_DETAILS_INFO} paymentOptionsList={PAYMENT_OPTIONS_LIST}/>
);

export const CreditCardDetails_ = Template.bind({});
CreditCardDetails_.args = {
  
};
