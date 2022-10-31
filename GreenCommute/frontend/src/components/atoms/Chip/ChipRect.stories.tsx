import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ChipRect from './ChipRect';

export default {
  title: 'atoms/Chip',
  component: ChipRect
} as ComponentMeta<typeof ChipRect>;

const Template: ComponentStory<typeof ChipRect> = (args) => (
  <ChipRect {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  title: 'UI/UX Designer'
};
