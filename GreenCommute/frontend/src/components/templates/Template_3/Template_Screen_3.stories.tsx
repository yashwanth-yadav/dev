import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Template_Screen_3 from './Template_Screen_3';
Template_Screen_3;
export default {
  title: 'templates/Screen3',
  component: Template_Screen_3
} as ComponentMeta<typeof Template_Screen_3>;

const Template: ComponentStory<typeof Template_Screen_3> = () => (
  <Template_Screen_3
    setselectedSavedJobs={() => console.log('Handle set selected values')}
  />
);

export const sidebar = Template.bind({});
