import React from 'react';
import { Box as MuiBox, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import { ADDRESS_LABEL, PENDING, VERIFIED } from '../../../utils/Messages';
import Icon from '../../atoms/Icon';
import { AddressCardPropsType } from '../../../utils/Types';
import RadioButton from '../../atoms/RadioButton/Index';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  width: 100%;
  max-width: 33.438rem;
  min-width: 19rem;
  min-height: 9.625rem;
  background-color: ${theme.palette.gammaWhite.main};
  border-radius: 0.5rem;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  padding: 0.75rem;
  box-sizing: border-box;
  display: flex;
  gap: 0.75rem;
  flex-direction: column;

  .address {
    max-width: 16.125rem;
  }

  .check {
    display: flex;
    align-items: center;
  }

  .clockIcon {
    padding-right: 0.25rem;
    path {
      stroke: red;
    }
  }

  .radioButton {
    margin-left: auto;
  }
`;

export const AddressCard = ({
  addressType,
  address,
  isSelected,
  isVerified,
  handleChange
}: AddressCardPropsType) => {
  return (
    <Box data-testid="address-card">
      <Typography
        variant="overline2"
        color={`${theme.palette.gammaMedium.main}`}
      >
        {ADDRESS_LABEL}
      </Typography>
      <Typography variant="overline" color={`${theme.palette.gammaHigh.main}`}>
        {addressType}
      </Typography>
      <Typography
        variant="overline"
        color={`${theme.palette.gammaMedium.main}`}
        className="address"
      >
        {address}
      </Typography>
      <MuiBox className="check">
        {isVerified && (
          <>
            <Icon name="check" />
            <Typography
              variant="overline"
              data-testid="verified"
              color={`${theme.palette.greenSuccess.main}`}
            >
              {VERIFIED}
            </Typography>
          </>
        )}
        {!isVerified && (
          <>
            <Icon name="clock" className="clockIcon" />
            <Typography
              variant="overline"
              data-testid="pending"
              color={`${theme.palette.red500.main}`}
            >
              {PENDING}
            </Typography>
          </>
        )}
        <RadioButton data-testid={`${addressType}-radio`}
          className="radioButton"
          isChecked={isSelected}
          handleChecked={handleChange}
        />
      </MuiBox>
    </Box>
  );
};
