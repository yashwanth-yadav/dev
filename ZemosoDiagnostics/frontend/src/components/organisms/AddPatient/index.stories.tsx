import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddPatient from '.';
import { PATIENT_LIST } from '../../../utils/Messages';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export default {
  title: 'Organisms/AddPatient',
  component: AddPatient,
} as ComponentMeta<typeof AddPatient>;

const Template: ComponentStory<typeof AddPatient> = (args) => (
  <AddPatient {...args}/>
);

export const AddPatient_ = Template.bind({});
AddPatient_.args = {
  patientList:PATIENT_LIST
}; 