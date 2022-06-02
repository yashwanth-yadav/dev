import SearchIcon from "./SearchIcon";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/SearchIcon',
    Component: SearchIcon,
}as ComponentMeta<typeof SearchIcon>

const Template:ComponentStory<typeof SearchIcon> = ()=><SearchIcon  />;

export const Primary = Template.bind({});
