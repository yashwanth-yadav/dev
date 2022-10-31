import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavItem from '.';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

export default {
  title: 'Molecules/NavItem',
  component: NavItem as ComponentMeta<typeof NavItem>
};
const Template: ComponentStory<typeof NavItem> = (args) => (
  <NavItem {...args} />
);

export const NavItems = Template.bind({});
NavItems.args = {
  label: 'Home'
};
