 import React from 'react';
 import { ComponentStory, ComponentMeta } from '@storybook/react';
 import { TEST_DETAILS_LIST } from '../../../utils/Messages';
import TestDetailsList from '.';
 
 /**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

 export default {
   title: 'Molecules/TestDetailsList',
   component: TestDetailsList
 } as ComponentMeta<typeof TestDetailsList>;
 
 const Template: ComponentStory<typeof TestDetailsList> = (args) => <TestDetailsList {...args} />;

export const TestDetailsList_ = Template.bind({});
TestDetailsList_.args = {
  testDetailsList:TEST_DETAILS_LIST
};