import More from "./More";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/More',
    Component: More,
}as ComponentMeta<typeof More>

const Template:ComponentStory<typeof More> = ()=><More  />;

export const Primary = Template.bind({});
