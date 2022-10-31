/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import theme from '../../../theme';
import styled from 'styled-components';
import { Box as MuiBox, Card as MuiCard, Typography } from '@mui/material';
import { MyAppointmentCardProps } from '../../../utils/Types';
import Icon from '../../atoms/Icon';
import Logo from '../../atoms/Logo';

const Card = styled(MuiCard)`
  max-width: ${theme.spacing(145.75)};
  min-height: ${theme.spacing(22)};
  display: flex;
  flex-direction: row;
  padding-left: ${theme.spacing(2)};
  padding-top: ${theme.spacing(1)};
  padding-bottom: ${theme.spacing(1)};
`;

const TextBox = styled(MuiBox)`
  flex: 1;
  padding-left: ${theme.spacing(6)};
  padding-top: ${theme.spacing(2)};
  word-wrap: break-word;
  padding-right: ${theme.spacing(2.5)};
`;

const StartIconBox = styled(MuiBox)`
  padding-top: ${theme.spacing(1)};

`;

const EndIconBox = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: ${theme.spacing(9)};
`;

const MyAppointmentCard = ({
  startLogo,
  testName,
  labName,
  day,
  date,
  patientName,
  fromTime,
  toTime
}: MyAppointmentCardProps) => {
  return (
    <Card
      data-testid="appointment"
      sx={{
        boxShadow: theme.shadows[3],
        borderRadius: theme.spacing(2)
      }}
    >
      <StartIconBox>
        <Logo name={startLogo} />
      </StartIconBox>
      <TextBox>
        <Typography
          color={theme.palette.gammaHigh.main}
          sx={{ ...theme.typography.caption2 }}
        >
          <span style={{ ...theme.typography.caption1 }}>{testName}</span> -{' '}
          {labName}
        </Typography>
        <Typography
          color={theme.palette.gammaMedium.main}
          sx={{
            ...theme.typography.caption2,
            paddingTop: theme.spacing(1)
          }}
        >
          {patientName}
        </Typography>
        <Typography
          color={theme.palette.gammaMedium.main}
          sx={{
            ...theme.typography.caption2,
            paddingTop: theme.spacing(4)
          }}
        >
          {day} {date}, {fromTime} to {toTime}
        </Typography>
      </TextBox>
      <EndIconBox>
        <MuiBox sx={{ paddingRight: theme.spacing(4.5), cursor: 'pointer' }}>
          <Icon name="share" />
        </MuiBox>
        <MuiBox sx={{ cursor: 'pointer' }}>
          <Icon name="download" />
        </MuiBox>
      </EndIconBox>
    </Card>
  );
};

export default MyAppointmentCard;
