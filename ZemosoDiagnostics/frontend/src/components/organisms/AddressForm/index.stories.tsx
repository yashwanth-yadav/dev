import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddressForm from '.';
import { SampleAddress } from '../../../utils/Constants';

export default {
  title: 'Organisms/AddressForm',
  component: AddressForm
} as ComponentMeta<typeof AddressForm>;

const Template: ComponentStory<typeof AddressForm> = () => (
  <AddressForm address={SampleAddress} setAddress={()=>{}} />
);

export const AddressForm_ = Template.bind({});
