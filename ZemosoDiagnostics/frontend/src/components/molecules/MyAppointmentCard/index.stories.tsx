/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MyAppointmentCard from '.';

export default {
  title: 'Molecules/MyAppointmentCard',
  component: MyAppointmentCard
} as ComponentMeta<typeof MyAppointmentCard>;

const Template: ComponentStory<typeof MyAppointmentCard> = (args) => (
  <MyAppointmentCard {...args} />
);

export const myAppointmentCard = Template.bind({});

myAppointmentCard.argTypes = {
  startLogo: {
    defaultValue: 'covid'
  },
  patientName: {
    defaultValue: 'Patrick Smith'
  },
  day: {
    defaultValue: 'Wed'
  },
  date: {
    defaultValue: '23'
  },
  fromTime: {
    defaultValue: '7.00 am'
  },
  toTime: {
    defaultValue: '8.00 am'
  },
  labName: {
    defaultValue: 'Los Altos Center Lab'
  },
  testName: {
    defaultValue: 'Full Body Checkup'
  }
};

myAppointmentCard.args = {
  patientName: 'Patrick Smith'
};
