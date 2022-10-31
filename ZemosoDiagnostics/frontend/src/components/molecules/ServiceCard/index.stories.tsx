import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceCard } from '.';
import { Box } from '@mui/material';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/ServiceCard',
  component: ServiceCard,
  argTypes: {
    logo: {
      control: 'select',
      options: ['test', 'home', 'labTechnician', 'shield', 'reports', 'award']
    }
  }
} as ComponentMeta<typeof ServiceCard>;

const Template: ComponentStory<typeof ServiceCard> = (args) => (
  <Box sx={{ width: '24rem' }}>
    <ServiceCard {...args} />
  </Box>
);

export const ServiceCard_ = Template.bind({});
ServiceCard_.args = {
  logo: 'test',
  description: '1600+ Tests'
};
