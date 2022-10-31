import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import RouteMetro from './RouteMetro';

export default {
  title: 'organisms/RouteMetro',
  component: RouteMetro
} as ComponentMeta<typeof RouteMetro>;

const Template: ComponentStory<typeof RouteMetro> = () => <RouteMetro />;

export const Primary = Template.bind({});
