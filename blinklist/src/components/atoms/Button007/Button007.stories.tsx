import { Button007, Props } from "./Button007";
import { Meta, Story } from "@storybook/react";
import { Button } from "@material-ui/core";


const meta: Meta = {
  
  title: "bouuto007",
  component: Button007,
  args: {
    children: "Botton007",
  },
  // decorators:[story=><Center>{story()}</Center>]
};



const Template: Story<Props> = (args) => <Button007 {...args} />;

export default meta;
// export const Primary = () => (
//   <Button007 variant="primary">Primary button</Button007>
// );
export const Kindle = () => (
//   <Center>
    <Button007 variant="secondary">Send to Kindle</Button007>
//   </Center>
);
export const Finished = () => (
  <Button007 variant="success">Finished</Button007>
);
// export const Danger = () => (
//   <Button007 variant="danger">dangr button</Button007>
// );
export const ReadNow = () => (
  <Button007
  
 
  variant="outlined"
> Read now
                      </Button007>
);

//using args

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary args",
// };



// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: "secondary",
//   // children:'sec args'
// };
