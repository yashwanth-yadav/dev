import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import SideBar from './SideBar';

export default {
  title: 'organisms/SideBar',
  component: SideBar
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const sidebar = Template.bind({});
sidebar.args = {
  width: '270px'
};
