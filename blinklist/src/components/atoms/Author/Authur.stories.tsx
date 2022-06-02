import Author from './Author';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/Author',
    Component:Author,
} as ComponentMeta<typeof Author>;

const Template:ComponentStory<typeof Author> = (args)=><Author {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    authname:"Trivikram",
};
