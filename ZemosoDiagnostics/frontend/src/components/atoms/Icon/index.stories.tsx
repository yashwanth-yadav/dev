import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Icon from '.';

export default {
  title: 'atoms/Icons',
  component: Icon,
  argTypes: {
    name: {
      defaultValue: 'calendar',
      control: 'select',
      options: [
        'calendar',
        'download',
        'chevronUp',
        'dollar',
        'info',
        'map',
        'search',
        'selected',
        'sort',
        'trash',
        'user',
        'clock',
        'chevronLeft',
        'chevronRight',
        'chevronsRight',
        'chevronDown',
        'close',
        'fileText',
        'share',
        'back',
        'card'
      ]
    }
  }
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const icons = Template.bind({});
