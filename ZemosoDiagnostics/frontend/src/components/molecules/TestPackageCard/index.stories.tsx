import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TestPackageCard } from '.';

export default {
  title: 'Molecules/TestPackageCard',
  component: TestPackageCard,
} as ComponentMeta<typeof TestPackageCard>;

const Template: ComponentStory<typeof TestPackageCard> = (args) => (
  <TestPackageCard {...args} />
);

export const TestPackageCard_ = Template.bind({});
TestPackageCard_.args = {
  image: 'bodyTest',
  title: 'Full body checkup'
};
