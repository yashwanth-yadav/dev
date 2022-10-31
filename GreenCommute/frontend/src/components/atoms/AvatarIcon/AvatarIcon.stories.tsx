import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import AvatarIcon from './AvatarIcon';

export default {
  title: 'atoms/AvatarIcon',
  component: AvatarIcon
} as ComponentMeta<typeof AvatarIcon>;

const Template: ComponentStory<typeof AvatarIcon> = () => <AvatarIcon />;

export const avatar = Template.bind({});
