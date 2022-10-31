/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountOption from '.';

export default {
  title: 'Molecules/AccountOption',
  component: AccountOption
} as ComponentMeta<typeof AccountOption>;

const Template: ComponentStory<typeof AccountOption> = (args) => (
  <AccountOption {...args} />
);
export const accountOption = Template.bind({});

accountOption.argTypes = {
  startIcon: {
    defaultValue: 'mapPin'
  },
  primaryText: {
    defaultValue: 'Track My Orders'
  },
  secondaryText: {
    defaultValue: 'Track your recent orders & see order status '
  },
  endIcon: {
    defaultValue: 'chevronRight'
  }
};

accountOption.args = {
  handleOnClick: () => {
    console.log('Click');
  }
};
