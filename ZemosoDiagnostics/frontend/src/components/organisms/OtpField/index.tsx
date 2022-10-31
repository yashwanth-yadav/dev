import React from 'react';
import { Box as MuiBox, TextField, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import { OTP_LABEL } from '../../../utils/Messages';
import { OtpFieldPropsType } from '../../../utils/Types';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  .label {
    color: ${theme.palette.gammaLow.main};
  }
  .otpInputs {
    display: flex;
    gap: 0.75rem;

    .otpField {
      width: 2.5rem;

      .MuiInput-root,
      .Mui-focused {
        color: black;
      }

      .MuiInput-underline::before {
        border-bottom: 1px solid ${theme.palette.grey300.main};
      }

      .MuiInput-underline::after {
        border-bottom: 2px solid black;
      }

      .Mui-disabled {
        -webkit-text-fill-color: black;
      }
    }
  }
`;

export const OtpField = ({ handleChange }: OtpFieldPropsType) => {
  const [otp, setOtp] = React.useState<number[]>([NaN, NaN, NaN, NaN]);
  const [pointer, setPointer] = React.useState<number>(0);
  const refs = React.useRef<Array<HTMLDivElement | null>>([]);

  const handleEvent = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const getValue = parseInt(event.target.value) % 10;
    const otps = [...otp];

    if (!isNaN(getValue)) {
      otps[index] = getValue;
      setOtp(otps);
      if (index < 3) {
        setPointer(index + 1);
      }
    }

    if (event.target.value === '') {
      otps[index] = NaN;
      setOtp(otps);
      if (index > 0) {
        setPointer(index - 1);
      }
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      refs.current[pointer]?.focus();
    }, 10);

    if (handleChange !== undefined) {
      handleChange(isNaN(otp[3]));
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [pointer, refs, handleChange, otp]);

  return (
    <Box data-testid="otp-field">
      <Typography variant="caption2" className="label">
        {OTP_LABEL}
      </Typography>
      <MuiBox className="otpInputs">
        {otp.map((field: number, index) => {
          return (
            <TextField
              variant="standard"
              sx={{ input: { textAlign: 'center' } }}
              value={isNaN(field) ? '' : field}
              key={index}
              inputRef={(element) => (refs.current[index] = element)}
              disabled={pointer !== index ? true : false}
              autoComplete="off"
              className="otpField"
              data-testid={`field-${index}`}
              onChange={(event) => handleEvent(event, index)}
            />
          );
        })}
      </MuiBox>
    </Box>
  );
};
