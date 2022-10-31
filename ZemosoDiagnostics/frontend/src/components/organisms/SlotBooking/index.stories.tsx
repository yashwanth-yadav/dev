import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SlotBooking from '.';
import { Dates } from '../../../utils/Types';

export default {
  title: 'Organisms/SlotBooking',
  component: SlotBooking
} as ComponentMeta<typeof SlotBooking>;

const Template: ComponentStory<typeof SlotBooking> = (args) => (
  <SlotBooking
    {...args}
  />
);

export const SlotBooking_ = Template.bind({});

SlotBooking_.args = {
  appointment: {
    month: '',
    day: '',
    date: '',
    time: { startTime: '', endTime: '' }
  },
  handleAppointment: undefined
};
