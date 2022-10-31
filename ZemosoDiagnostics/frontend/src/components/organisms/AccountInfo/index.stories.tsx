/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccountInfo from '.';
import { ACCOUNT_OPTIONS_LIST } from '../../../utils/Messages';

export default {
  title: 'Organisms/AccountInfo',
  component: AccountInfo
} as ComponentMeta<typeof AccountInfo>;

const Template: ComponentStory<typeof AccountInfo> = (args) => (
  <AccountInfo {...args} />
);
export const accountInfo = Template.bind({});
accountInfo.argTypes = {
  name: {
    defaultValue: 'Avatar'
  },
  isClosed: {
    defaultValue: false
  }
};
accountInfo.args = {
  username: 'Patrick Smith',
  email: 'patricksmith@gmail.com',
  accountOptionsList: ACCOUNT_OPTIONS_LIST,
  phoneNumber: '+1 330-617-3324'
};
