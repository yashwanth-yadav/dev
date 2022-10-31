import { Button, ButtonProps, Typography } from '@mui/material';
import React from 'react';
import theme, { textVariant } from '../../../theme';

interface Props extends ButtonProps {
  handleClick?: () => void;
  childernWidth?: string;
  textVariant?: textVariant;
}

const IconButtonAtom = ({
  childernWidth,
  handleClick,
  variant,
  sx,
  startIcon,
  endIcon,
  children,
  textVariant
}: Props) => {
  return (
    <>
      <Button
        onClick={handleClick}
        variant={variant}
        disableElevation
        sx={{ ...sx }}
      >
        {startIcon}
        {children && (
          <Typography
            variant={textVariant}
            sx={{
              width: childernWidth,
              paddingLeft: startIcon ? theme.spacing(5) : 'none',
              paddingRight: endIcon ? theme.spacing(5) : 'none',
              textAlign: 'left'
            }}
          >
            {children}
          </Typography>
        )}
        {endIcon}
      </Button>
    </>
  );
};

export default IconButtonAtom;
