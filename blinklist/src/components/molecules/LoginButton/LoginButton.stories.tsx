
import LoginButton from "./LoginButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecules/LoginButton',
    Component: LoginButton,
}as ComponentMeta<typeof LoginButton>

const Template:ComponentStory<typeof LoginButton> = ()=><LoginButton  />;

export const Primary = Template.bind({});
