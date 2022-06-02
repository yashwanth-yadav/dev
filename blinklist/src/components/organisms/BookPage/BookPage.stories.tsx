import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import BookPage from "./BookPage";

export default {
    title:'organisms/BookPage',
    Component: BookPage,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof BookPage>

const Template: ComponentStory<typeof BookPage> = (args) => <BookPage {...args}/>;




export const Primary = Template.bind({});

Primary.args = {

    details: [{id:1,image: "https://www.linkpicture.com/q/book6.png", name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:false,prog:15,added:true}],
  };