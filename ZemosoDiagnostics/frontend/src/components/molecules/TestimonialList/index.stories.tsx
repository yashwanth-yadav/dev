/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TestimonialList from '.';
import { TESTIMONIAL_LIST } from '../../../utils/Messages';

export default {
  title: 'Molecules/TestimonialList',
  component: TestimonialList
} as ComponentMeta<typeof TestimonialList>;

const Template: ComponentStory<typeof TestimonialList> = (args) => (
  <TestimonialList {...args} />
);

export const testimonialList = Template.bind({});

testimonialList.args = {
  testimonialList: TESTIMONIAL_LIST
};
