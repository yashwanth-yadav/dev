import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalStepper from './HorizontalStepper';

export default {
  title: 'organisms/HorizontalStepper',
  component: HorizontalStepper
} as ComponentMeta<typeof HorizontalStepper>;

const Template: ComponentStory<typeof HorizontalStepper> = (args) => (
  <HorizontalStepper {...args} />
);

const steps = ['Your Location', 'Job Location', 'Your Skills'];
const cityoptions = ['New Delhi', 'Bangalore', 'Hyderabad'];
const joboptions = ['UI/UX Designer', 'Graphic Designer', 'DevOps'];

export const Primary = Template.bind({});

Primary.args = {
  steps: steps,
  currentLocationOptions: cityoptions,
  jobLocationOptions: cityoptions,
  skillOptions: joboptions,

  setCity: () => {
    console.log('Handle finish triggerd');
  },
  setCity2: () => {
    console.log('Handle finish triggerd');
  },
  setStep: () => {
    console.log('Handle finish triggerd');
  }
};
