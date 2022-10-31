/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProfileInfo from '.';

export default {
  title: 'Molecules/ProfileInfo',
  component: ProfileInfo
} as ComponentMeta<typeof ProfileInfo>;

const Template: ComponentStory<typeof ProfileInfo> = (args) => (
  <ProfileInfo {...args} />
);

export const profileInfo = Template.bind({});

profileInfo.argTypes = {
  name: {
    defaultValue: 'avatar'
  },
  username: {
    defaultValue: 'Patrick Smith'
  },
  email: {
    defaultValue: 'patricksmith@gmail.com'
  },
  phoneNumber: {
    defaultValue: '+1 330-617-3324'
  }
};
