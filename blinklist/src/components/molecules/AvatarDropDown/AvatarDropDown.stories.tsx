import AvatarDropDown from "./AvatarDropDown";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecules/AvatarDropDown',
    Component: AvatarDropDown,
}as ComponentMeta<typeof AvatarDropDown>

const Template:ComponentStory<typeof AvatarDropDown> = ()=><AvatarDropDown  />;

export const Primary = Template.bind({});
