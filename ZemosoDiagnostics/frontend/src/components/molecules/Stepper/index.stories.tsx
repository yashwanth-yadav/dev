import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Stepper from '.';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */


export default {
  title: 'Molecules/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args}  />;

export const Stepper_ = Template.bind({});

const steps = ['Home', 'Covid RTPCR', 'Add Patient'];
Stepper_.args = {
  steps: steps,
  step: 0,
  labStepper: false
}
