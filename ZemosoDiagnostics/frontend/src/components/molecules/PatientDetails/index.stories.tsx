import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PatientDetails } from '.';
import { PATIENT_DETAILS } from '../../../utils/Constants';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Molecules/PatientDetails',
  component: PatientDetails
} as ComponentMeta<typeof PatientDetails>;

const Template: ComponentStory<typeof PatientDetails> = (args) => (
  <PatientDetails {...args} />
);

export const PatientDetails_ = Template.bind({});

PatientDetails_.args = {
  patientDetails: PATIENT_DETAILS
};
