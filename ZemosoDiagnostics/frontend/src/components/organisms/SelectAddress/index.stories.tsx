import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SelectAddress from '.';
import { ADDRESS_LIST } from '../../../utils/Messages';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export default {
  title: 'Organisms/SelectAddress',
  component: SelectAddress,
} as ComponentMeta<typeof SelectAddress>;

const Template: ComponentStory<typeof SelectAddress> = (args) => (
  <SelectAddress {...args} />
);

export const SelectAddress_ = Template.bind({});
SelectAddress_.args = {
  addressList:ADDRESS_LIST
};