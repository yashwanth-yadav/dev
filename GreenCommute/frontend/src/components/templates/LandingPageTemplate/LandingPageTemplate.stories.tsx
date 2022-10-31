import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import LandingPageTemplate from './LandingPageTemplate';
import Left from './Left';
import Right from './Right';

export default {
  title: 'templates/LandingPageTemplate',
  component: LandingPageTemplate
} as ComponentMeta<typeof LandingPageTemplate>;

const Template: ComponentStory<typeof LandingPageTemplate> = () => (
  <LandingPageTemplate left={<Left />} right={<Right />} />
);

export const landingPageTemplate = Template.bind({});
