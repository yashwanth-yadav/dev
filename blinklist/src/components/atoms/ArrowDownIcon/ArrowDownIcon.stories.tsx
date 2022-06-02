import { ArrowDownIcon} from "./ArrowDownIcon";
import { Meta, Story } from "@storybook/react";


const meta: Meta = {
  title: "atoms/ArrowDownIcon",
  component: ArrowDownIcon,
  args: {
    children: "ArrowDownIcon",
  },
  // decorators:[story=><Center>{story()}</Center>]
};

// type Temp = {
//   args: any;
// };

// const Template: Story<Props> = (args) => <ArrowDownIcon {...args} />;

export default meta;
export const Primary = () => (
  <ArrowDownIcon />
);
