import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppointmentsInfo } from '.';
import { RECENT_TESTS, UPCOMING_TESTS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/AppointmentsInfo',
  component: AppointmentsInfo
} as ComponentMeta<typeof AppointmentsInfo>;

const Template: ComponentStory<typeof AppointmentsInfo> = (args) => (
  <AppointmentsInfo {...args} />
);

export const AppointmentsInfo_ = Template.bind({});
AppointmentsInfo_.args = {
  upcomingTests: UPCOMING_TESTS,
  recentTests: RECENT_TESTS
};
