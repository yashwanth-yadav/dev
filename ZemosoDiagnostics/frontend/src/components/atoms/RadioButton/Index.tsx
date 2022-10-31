import React from 'react';
import { Radio, RadioProps } from '@mui/material';
import theme from '../../../theme';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */
interface RadioButtonProps extends RadioProps {
  isChecked?: boolean;
  handleChecked?: () => void;
}

const RadioButton = ({
  isChecked,
  handleChecked,
  ...props
}: RadioButtonProps) => {
  return (
    <Radio
      data-testid="RadioButton"
      checked={isChecked}
      onClick={handleChecked}
      disableRipple
      sx={{
        color: theme.palette.grey200.main,
        '&.Mui-checked': {
          color: theme.palette.structuralPurple800.main
        },
        fontSize: theme.spacing(4.25)
      }}
      {...props}
    ></Radio>
  );
};

export default RadioButton;
