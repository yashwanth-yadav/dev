import React from 'react';
import {  Grid, Typography } from '@mui/material';
import theme from '../../../theme';
import Logo from '../../atoms/Logo/index';
import { LogoPropsType } from '../../../utils/Types';


export interface TestMenuItemPropsType {
  logo: LogoPropsType['name'];
  name: string;
}

export const TestMenuItem = ({ logo, name }: TestMenuItemPropsType) => {
  return (
    <Grid
      container
      flexDirection= 'column'    
      justifyContent="center"
      alignItems="center"
      data-testid="test_menu_item"
      sx={{
        height: theme.spacing(11),
        width: '110.92px',

      }}
    >
      <Grid item sx={{
          paddingRight:theme.spacing(1)
        }}>
        <Logo name={logo} />
      </Grid>

      <Grid
        item
        flexDirection= 'column'  
        sx={{
          alignItems: 'center',
          width: '80px',
          alignSelf: 'stretch'
        }}
      >
        <Typography
          sx={{
            width: theme.spacing(16),
            ...theme.typography.overline,
            fontSize: '12px',
            lineHeight: '18px',
            wordBreak: 'break-word',
            color:theme.palette.gammaHigh.main
          }}
          className="description"
          variant="caption2"
        >
          {name}
        </Typography>
      </Grid>
    </Grid>
  );
};
