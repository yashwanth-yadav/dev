import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image from '.';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export default {
  title: 'Atoms/Image',
  component: Image
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Image_ = Template.bind({});
Image_.args = {
  name: 'family'
};
