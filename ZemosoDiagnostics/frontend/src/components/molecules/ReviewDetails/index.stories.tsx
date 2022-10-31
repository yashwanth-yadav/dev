import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewDetails from '.';

export default {
  title: 'Molecules/ReviewDetails',
  component: ReviewDetails
} as ComponentMeta<typeof ReviewDetails>;

const Template: ComponentStory<typeof ReviewDetails> = (args) => (
  <ReviewDetails {...args} />
);

export const ReviewDetail = Template.bind({});

ReviewDetail.args = {
    date: 'Tue, Feb 23, 2022',
    time: '07.00 - 8.00 AM'
};
