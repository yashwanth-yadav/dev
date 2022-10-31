import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import IconButtonAtom from './IconButtonAtom';
import theme from '../../../theme';
import { search, arrowRight, filterIcon } from '../../../utils/constants';
import Icons from '../Icons/Icons';

export default {
  title: 'atoms/Button',
  component: IconButtonAtom
} as ComponentMeta<typeof IconButtonAtom>;

const Template: ComponentStory<typeof IconButtonAtom> = (args) => (
  <IconButtonAtom {...args} />
);

export const searchIconButton = Template.bind({});

searchIconButton.args = {
  sx: {
    height: theme.spacing(11),
    width: theme.spacing(11),
    minWidth: theme.spacing(11),
    borderRadius: '50%',
    backgroundColor: 'alpha400.main',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'alpha600.main'
    }
  },
  variant: 'contained',
  startIcon: (
    <Icons icon={search} height={theme.spacing(6)} width={theme.spacing(6)} />
  )
};

export const greenCommuteRoutesButton = Template.bind({});

greenCommuteRoutesButton.args = {
  sx: {
    height: theme.spacing(16),
    width: theme.spacing(101),
    borderRadius: '10%',
    backgroundColor: 'gammaWhite.main',
    cursor: 'pointer',
    color: 'alpha600.main'
  },
  children: 'Green Commute Routes',
  textVariant: 'subtitle1',
  variant: 'text',
  endIcon: (
    <Icons
      icon={arrowRight}
      height={theme.spacing(6)}
      width={theme.spacing(6)}
    />
  )
};

export const filter = Template.bind({});

filter.args = {
  sx: {
    height: theme.spacing(14),
    width: theme.spacing(34.25),
    backgroundColor: 'gammaWhite.main',
    cursor: 'pointer',
    color: 'betaHigh.main',
    borderRadius: theme.spacing(8)
  },
  children: 'Filter',
  textVariant: 'body2',
  variant: 'text',
  startIcon: (
    <Icons
      icon={filterIcon}
      height={theme.spacing(6)}
      width={theme.spacing(6)}
    />
  )
};

export const filterApply = Template.bind({});
filterApply.args = {
  variant: 'contained',
  sx: {
    width: '101px',
    height: '38px',
    // marginBottom: '20px',
    bgcolor: 'alpha400.main',
    '&:hover': {
      bgcolor: 'alpha400.main'
    }
  },
  children: 'Apply'
};

export const filterClear = Template.bind({});

filterClear.args = {
  variant: 'contained',

  sx: {
    width: '101px',
    bgcolor: 'white',
    height: '38px',
    color: 'alpha400.main',
    '&:hover': {
      bgcolor: 'white'
    }
  },
  children: 'Clear All'
};
