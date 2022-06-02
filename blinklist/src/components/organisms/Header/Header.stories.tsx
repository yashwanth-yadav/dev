import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from "react-router-dom";
import Header from './Header';


export default {
  title: 'organisms/Header',
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;
export const Primary = Template.bind({});
