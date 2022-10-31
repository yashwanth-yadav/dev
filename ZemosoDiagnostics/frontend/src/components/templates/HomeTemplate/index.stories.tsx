/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HomeTemplate from '.';

export default {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate
} as ComponentMeta<typeof HomeTemplate>;

const Template: ComponentStory<typeof HomeTemplate> = (args) => (
  <HomeTemplate {...args} />
);
export const homeTemplate = Template.bind({});

const Element = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    ></div>
  );
};

homeTemplate.args = {
  mainComponent: <Element />
};
