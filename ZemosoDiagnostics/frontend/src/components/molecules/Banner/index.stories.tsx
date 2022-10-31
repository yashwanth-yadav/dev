/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Banner from './index';

export default {
  title: 'Molecules/Banner',
  component: Banner
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const banner = Template.bind({});
