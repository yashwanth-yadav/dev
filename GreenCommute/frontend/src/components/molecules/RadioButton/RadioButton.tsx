import * as React from 'react';
import { styled } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import { FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import theme from '../../../theme';

interface RadioButtonProps {
  label1: string;
  label2: string;
  title: string;
}
const labelStyle = {
  color: theme.palette.betaMedium.main,
  variant: theme.typography.body2
};

const titleStyle = {
  color: theme.palette.betaHigh.main,
  variant: theme.typography.body1
};

const UncheckedRadio = styled('span')(() => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.beta400.main}`,
  width: 16,
  height: 16,
  backgroundColor: theme.palette.gammaWhite.main,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
  '.Mui-focusVisible &': {
    outline: '2px auto rgba(19,124,189,.6)',
    outlineOffset: 2
  }
}));

const CheckedRadio = styled(UncheckedRadio)({
  border: '1px',
  backgroundColor: theme.palette.alpha400.main,
  backgroundImage:
    'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
  '&:before': {
    display: 'block',
    width: 16,
    height: 16,
    backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
    content: '""'
  },
  'input:hover ~ &': {
    backgroundColor: theme.palette.alpha300.main
  }
});

const Radios = (props: RadioButtonProps) => {
  return (
    <div>
      <FormGroup>
        <FormLabel sx={titleStyle}>{props.title}</FormLabel>
        <FormControlLabel
          checked
          sx={labelStyle}
          disabled={false}
          control={
            <Radio
              sx={{
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
              disableRipple
              color="default"
              checkedIcon={<CheckedRadio />}
              icon={<UncheckedRadio />}
              {...props}
            />
          }
          label={props.label1}
        />
        <FormControlLabel
          sx={labelStyle}
          disabled={false}
          control={
            <Radio
              sx={{
                '&:hover': {
                  bgcolor: 'transparent'
                }
              }}
              disableRipple
              color="default"
              checkedIcon={<UncheckedRadio />}
              icon={<UncheckedRadio />}
              {...props}
            />
          }
          label={props.label2}
        />
      </FormGroup>
    </div>
  );
};

export default function RadioButton(props: RadioButtonProps) {
  return (
    <Radios
      data-testid="radio"
      label1={props.label1}
      label2={props.label2}
      title={props.title}
    />
  );
}
