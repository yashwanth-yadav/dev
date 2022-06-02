import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book2 from '../../../atoms/assets/book2.png';
import BookTabs from './BooksTabs';



export default {
  title: 'organisms/BookTabs',
  component: BookTabs,

} as ComponentMeta<typeof BookTabs>;


const Template: ComponentStory<typeof BookTabs> = () => <BookTabs />;




export const Primary = Template.bind({});
