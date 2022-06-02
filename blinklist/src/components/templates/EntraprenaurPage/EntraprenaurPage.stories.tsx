import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MemoryRouter } from "react-router-dom";
import EntraprenaurPage from './EntraprenaurPage';


export default {
  title: 'template/EntraprenaurPage-books/EntraprenaurPage',
  component: EntraprenaurPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof EntraprenaurPage>;

const Template: ComponentStory<typeof EntraprenaurPage> = (args) => <EntraprenaurPage {...args} />;
export const Primary = Template.bind({});
const fun=() => {
    console.log("Handle finish triggerd");
  }

Primary.args = {

    details: [{id:1,image: "https://www.linkpicture.com/q/book6.png", name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:true,prog:15,added:true}], 
    setBooks:fun,
  };