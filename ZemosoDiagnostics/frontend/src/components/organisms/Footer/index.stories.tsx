import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from '.';
/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export default {
  title: 'Organisms/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const footer_ = Template.bind({});
