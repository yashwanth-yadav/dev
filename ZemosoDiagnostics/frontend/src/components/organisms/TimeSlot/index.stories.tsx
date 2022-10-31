import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TimeSlot from '.';

export default {
  title: 'Organisms/TimeSlot',
  component: TimeSlot,
} as ComponentMeta<typeof TimeSlot>;

const Template: ComponentStory<typeof TimeSlot> = (args) => (
  <TimeSlot {...args} />
);

export const TimeSlot_ = Template.bind({});


TimeSlot_.args = {
  id: 1,
  startTime: '',
  endTime:'',
  setTime: undefined,
  appointment: {
    month: '',
    day: '',
    date: '',
    time: { startTime: '', endTime: '' }
  }
};