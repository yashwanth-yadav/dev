import ReadTime from './ReadTime';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'molecules/ReadTime',
    Component:ReadTime,
} as ComponentMeta<typeof ReadTime>;

const Template:ComponentStory<typeof ReadTime> = (args)=><ReadTime {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    time:"24 minutes",
};


