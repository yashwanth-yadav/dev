import BlinkListLogo from './BlinkListLogo';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/BlinkListLogo',
    Component:BlinkListLogo,
} as ComponentMeta<typeof BlinkListLogo>;

const Template:ComponentStory<typeof BlinkListLogo> = ()=><BlinkListLogo />;

export const Primary = Template.bind({});


