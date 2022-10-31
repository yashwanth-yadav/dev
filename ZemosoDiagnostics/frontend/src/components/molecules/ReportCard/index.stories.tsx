/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReportCard from '.';

export default {
  title: 'Molecules/ReportCard',
  component: ReportCard
} as ComponentMeta<typeof ReportCard>;

const Template: ComponentStory<typeof ReportCard> = (args) => (
  <ReportCard {...args} />
);

export const reportCard = Template.bind({});

reportCard.argTypes = {
  labName: {
    defaultValue: 'Los Altos Center Lab'
  },
  testName: {
    defaultValue: 'COVID RT-PCR Test'
  },
  date: {
    defaultValue: '02 Feb 2022'
  },
  time: {
    defaultValue: '08.30 AM'
  },
  isPending: {
    defaultValue: false
  }
};
