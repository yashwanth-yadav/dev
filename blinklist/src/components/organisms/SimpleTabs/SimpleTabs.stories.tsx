import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from "react-router-dom";
import SimpleTabs from './SimpleTabs';


export default {
  title: 'template/SimpleTabs-books/SimpleTabs',
  component: SimpleTabs,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof SimpleTabs>;

const Template: ComponentStory<typeof SimpleTabs> = (args) => <SimpleTabs {...args} />;
export const Primary = Template.bind({});
const fun=() => {
    console.log("Handle finish triggerd");
  }

Primary.args = {

    details: [{id:1,image: "https://www.linkpicture.com/q/book6.png", name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:true,prog:15,added:true}], 
    setBooks:fun,
  };