import { TextField } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { InputFieldProps } from '../../../utils/Types';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const InputComponent = styled(TextField)`
  width: 100%;
  height: ${theme.spacing(14.5)};
  text-overflow: ellipsis;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InputFieldStyles = {
  '&.MuiInputBase-input.MuiInput-input::focus': {
    border: 'none',
    background: 'blue'
  },
  '.MuiInputLabel-root': {
    color: 'gammaLow.main',
    typography: 'body1',
    // background: 'blue',
    mb: '20px',
    pb: '20px'
  },
  '.MuiInputBase-input.MuiInput-input': {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    borderBottom: `1px solid ${theme.palette.grey500.main}`,
    typography: 'caption2',
    border: 'none',
    // background: 'yellow',
    mt: '5px'

  },
  '& .MuiInput-underline::before': {
    borderColor: ` ${theme.palette.grey100.main} !important`
  },
  '& .MuiInput-underline:after': {
    borderBottom: `1px solid ${theme.palette.grey100.main}`
  },
  '& .MuiInput-underline:hover:before': {
    borderBottom: `1px solid ${theme.palette.grey100.main}`
  }
};

const InputField = ({
  label,
  placeholder,
  handleChange,
  value
}: InputFieldProps) => {
  const handleEvent = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (handleChange !== undefined) handleChange(event.target.value);
  };
  return (
    <InputComponent
      data-testid="input-field"
      onChange={(event) => handleEvent(event)}
      autoFocus={false}
      InputLabelProps={{ shrink: true, disableAnimation: true, focused: false }}
      autoComplete="off"
      variant="standard"
      placeholder={placeholder}
      label={label}
      value={value}
      sx={{ ...InputFieldStyles }}
    />
  );
};

export default InputField;
