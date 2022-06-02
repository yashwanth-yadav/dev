import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from "react-router-dom";
import BooksList from './BooksList';


export default {
  title: 'template/BooksList-books/BooksList',
  component: BooksList,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof BooksList>;

const Template: ComponentStory<typeof BooksList> = (args) => <BooksList {...args} />;
export const Primary = Template.bind({});
const fun=() => {
    console.log("Handle finish triggerd");
  }

Primary.args = {

    details: [{id:1,image: "https://www.linkpicture.com/q/book6.png", name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:false,prog:15,added:true}], 
    setBooks:fun,
  };