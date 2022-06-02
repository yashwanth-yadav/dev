import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from "react-router-dom";
import ExploreBox from './ExploreBox';


export default {
  title: 'organisms/ExploreBox',
  component: ExploreBox,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof ExploreBox>;

const Template: ComponentStory<typeof ExploreBox> = () => <ExploreBox />;
export const Primary = Template.bind({});
