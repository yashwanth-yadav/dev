import EntraprenaurExplore from "./EntraprenaurExplore";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecules/EntraprenaurExplore',
    Component: EntraprenaurExplore,
}as ComponentMeta<typeof EntraprenaurExplore>

const Template:ComponentStory<typeof EntraprenaurExplore> = ()=><EntraprenaurExplore  />;

export const Primary = Template.bind({});
