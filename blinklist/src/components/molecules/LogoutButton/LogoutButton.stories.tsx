import LogoutButton from "./LogoutButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecules/LogoutButton',
    Component: LogoutButton,
}as ComponentMeta<typeof LogoutButton>

const Template:ComponentStory<typeof LogoutButton> = ()=><LogoutButton  />;

export const Primary = Template.bind({});
