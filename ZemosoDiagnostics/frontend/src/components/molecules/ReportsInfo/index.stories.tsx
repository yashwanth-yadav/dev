import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReportsInfo } from '.';
import { UPCOMING_REPORTS, RECENT_REPORTS, LAB_DETAILS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/ReportsInfo',
  component: ReportsInfo
} as ComponentMeta<typeof ReportsInfo>;

const Template: ComponentStory<typeof ReportsInfo> = (args) => (
  <ReportsInfo {...args} />
);


export const ReportsInfo_ = Template.bind({});
ReportsInfo_.args = {
  upcomingReports: UPCOMING_REPORTS,
  recentReports: RECENT_REPORTS
};
