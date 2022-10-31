import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '../../../utils/Types';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <MuiButton onClick={onClick} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
