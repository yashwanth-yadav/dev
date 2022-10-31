import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './index';

export default {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar  />;

export const searchBar = Template.bind({});
