import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Chip from '.';
import { Typography } from '@mui/material';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const Date = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'4px'}}>
      <Typography variant="caption2">Mon</Typography>
      <Typography variant="body3">21</Typography>
    </div>
  );
};

const Time = () => {
  return <Typography variant="overline2">06.00 - 07.00</Typography>;
};

const Default = () => {
  return <Typography variant="overline">Myself</Typography>;
};

export default {
  title: 'Molecules/Chip',
  component: Chip
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const DateChip = Template.bind({});

DateChip.args = {
  label: <Date />,
  size: 'large'
};

export const TimeChip = Template.bind({});

TimeChip.args = {
  label: <Time />,
  size: 'medium',
  
};

export const NormalChip = Template.bind({});

NormalChip.args = {
  label: <Default />,
  size: 'small'
};
