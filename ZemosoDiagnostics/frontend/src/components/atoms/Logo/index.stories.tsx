import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Logo from '.';

export default {
  title: 'atoms/Logo',
  component: Logo,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'bloodCount',
        'kidney',
        'throid',
        'body',
        'diabities',
        'covid',
        'liver',
        'lipid',
        'award',
        'altos',
        'googlePay',
        'labcorp',
        'labTechnician',
        'netBanking',
        'paypal',
        'pdf',
        'reports',
        'shield',
        'test',
        'zemosoLogo',
        'pdf_h',
        'avatar'
      ]
    }
  }
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const logo = Template.bind({});
logo.args = {
  name: 'bloodCount'
};
