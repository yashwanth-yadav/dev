import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import RouteCab from './RouteCab';

export default {
  title: 'organisms/RouteCab',
  component: RouteCab
} as ComponentMeta<typeof RouteCab>;

const Template: ComponentStory<typeof RouteCab> = () => <RouteCab />;

export const RouteCabStory = Template.bind({});
