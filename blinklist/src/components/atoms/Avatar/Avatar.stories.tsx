import Avatar from "./Avatar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/Avatar',
    Component: Avatar,
}as ComponentMeta<typeof Avatar>

const Template:ComponentStory<typeof Avatar> = ()=><Avatar  />;

export const Primary = Template.bind({});
