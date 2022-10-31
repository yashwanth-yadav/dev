import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import FileUpload from './FIleUpload';

export default {
  title: 'organisms/FileUpload',
  component: FileUpload
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const fileUpload = Template.bind({});

fileUpload.args = {
  open: true
};
