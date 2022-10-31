import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
interface CheckboxProps {
  label: string;
  defaultChecked?: boolean;
  handleChecked?: (event: any) => void;
}

const labelStyle = {
  color: theme.palette.betaMedium.main,
  variant: theme.typography.body2,
  paddingBottom: '-8px'
};

const CheckboxComponent = (props: CheckboxProps) => {
  return (
    <div data-testid="checkbox">
      <FormGroup>
        <FormControlLabel
          sx={labelStyle}
          disabled={false}
          control={
            <Checkbox
              checked={props.defaultChecked}
              onClick={props.handleChecked}
              disableRipple
              sx={{
                color: theme.palette.beta400.main,
                '&.Mui-checked': {
                  color: theme.palette.alpha400.main
                }
              }}
            />
          }
          label={props.label}
        />
      </FormGroup>
    </div>
  );
};
export default CheckboxComponent;
