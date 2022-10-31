import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ServicesList from '.';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/ServicesList',
  component: ServicesList,
} as ComponentMeta<typeof ServicesList>;

const Template: ComponentStory<typeof ServicesList> = () => (<ServicesList />
);

export const ServicesList_ = Template.bind({});

