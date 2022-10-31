/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import styled from 'styled-components';
import { Box as MuiBox, Card as MuiCard, Typography } from '@mui/material';
import theme from '../../../theme';
import { ReportCardProps } from '../../../utils/Types';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import { PENDING } from '../../../utils/Messages';

const Card = styled(MuiCard)`
  max-width: ${theme.spacing(145.75)};
  min-height: ${theme.spacing(22)};
  display: flex;
  flex-direction: row;
  padding-left: ${theme.spacing(4)};
`;

const LogoBox = styled(MuiBox)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled(MuiBox)`
  padding-left: ${theme.spacing(7)};
  padding-right: ${theme.spacing(2.5)};
  padding-top: ${theme.spacing(3)};
  flex: 1;
  word-wrap: break-word;
  min-width: 150px;
`;

const EndIconBox = styled(MuiBox)`
  padding-top: ${theme.spacing(3)};
  padding-right: ${theme.spacing(3)};
`;

const ReportCard = ({
  labName,
  testName,
  date,
  time,
  isPending
}: ReportCardProps) => {
  return (
    <Card
      data-testid="report-card"
      sx={{
        boxShadow: theme.shadows[3],
        borderRadius: theme.spacing(2)
      }}
    >
      <LogoBox>
        <Logo name={isPending ? 'pdf' : 'pdf_h'} />
      </LogoBox>
      <TextBox>
        <Typography
          noWrap={true}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...theme.typography.caption1,
            color: theme.palette.gammaHigh.main
          }}
        >
          {labName}
        </Typography>
        <Typography
          noWrap={true}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...theme.typography.caption2,
            color: theme.palette.gammaHigh.main,
            paddingTop: theme.spacing(1)
          }}
        >
          {testName}
        </Typography>

        <MuiBox
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: theme.spacing(1)
          }}
        >
          {isPending ? (
            <>
              <MuiBox sx={{ position: 'relative', left: theme.spacing(0.75) }}>
                <Icon name="clockRed" />
              </MuiBox>

              <Typography
                noWrap={true}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  ...theme.typography.caption2,
                  color: theme.palette.red500.main,
                  paddingBottom: theme.spacing(3.5)
                }}
              >
                {PENDING}
              </Typography>
            </>
          ) : (
            <>
              <Typography
                noWrap={true}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  ...theme.typography.overline,
                  color: theme.palette.gammaMedium.main,
                  paddingRight: theme.spacing(2),
                  borderRight: `${theme.spacing(0.25)} solid ${
                    theme.palette.grey100.main
                  }`
                }}
              >
                {date}
              </Typography>

              <Typography
                noWrap={true}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  ...theme.typography.overline,
                  color: theme.palette.gammaMedium.main,
                  paddingLeft: theme.spacing(2)
                }}
              >
                {time}
              </Typography>
            </>
          )}
        </MuiBox>
      </TextBox>
      <EndIconBox
        sx={{
          '&:hover': {
            cursor: 'pointer'
          }
        }}
      >
        {!isPending && <Icon name="download" />}
      </EndIconBox>
    </Card>
  );
};

export default ReportCard;
