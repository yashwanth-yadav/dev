import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from "react-router-dom";
import MainPage from './MainPage';


export default {
  title: 'template/MainPage-books/MainPage',
  component: MainPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />;
export const Primary = Template.bind({});
const fun=() => {
    console.log("Handle finish triggerd");
  }

Primary.args = {

    details: [{id:1,image: "https://www.linkpicture.com/q/book6.png", name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:true,prog:15,added:true}], 
    setBooks:fun,
  };