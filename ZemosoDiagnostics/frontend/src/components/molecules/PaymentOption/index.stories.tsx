import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PaymentOption from '.';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export default {
  title: 'Molecules/PaymentOption',
  component: PaymentOption,
  argTypes: {
    logo: {
      control: 'select',
      options: ['paypal', 'googlePay', 'netBanking']
    },
    name: {
      control: 'select',
      options: ['Paypal', 'Google Pay', 'Net Banking']
    }
  }
} as ComponentMeta<typeof PaymentOption>;

const Template: ComponentStory<typeof PaymentOption> = (args) => (
  <PaymentOption {...args} />
);

export const PaymentOption_ = Template.bind({});
PaymentOption_.args = {
  logo: 'paypal',
  name: 'Paypal'
};
