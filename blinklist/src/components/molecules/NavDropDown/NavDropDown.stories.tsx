import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavDropDown } from './NavDropDown';


export default {
  title: 'molecules/NavDropDown',
  component: NavDropDown,

} as ComponentMeta<typeof NavDropDown>;


const Template:ComponentStory<typeof NavDropDown> = (args)=><NavDropDown {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    text:"Explore",
};