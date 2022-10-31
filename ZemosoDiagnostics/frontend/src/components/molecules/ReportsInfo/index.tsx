import { Box as MuiBox, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import {
  RECENT_REPORTS,
  REPORTS,
  TRACK_TEST,
  UPCOMING_REPORTS
} from '../../../utils/Messages';
import { ReportsInfoPropsType } from '../../../utils/Types';
import ReportCard from '../ReportCard';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export const Box = styled(MuiBox)`
  width: 100%;
  max-width: 36.438rem;

  .heading {
    font-weight: 700;
  }

  .subHeading {
    margin-top: 2.5rem;
    margin-bottom: 2.25rem;
    color: ${theme.palette.gammaMedium.main};
  }

  .reports {
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
  }
`;

export const ReportsInfo = ({
  upcomingReports,
  recentReports
}: ReportsInfoPropsType) => {
  return (
    <Box data-testid="reports-info">
      <Typography
        variant="h1"
        className="heading"
        color={`${theme.palette.gammaMedium.main}`}
      >
        {REPORTS}
      </Typography>
      <Typography variant="subtitle1" className="subHeading">
        {UPCOMING_REPORTS}
      </Typography>
      <MuiBox className="reports">
        {upcomingReports.map((report, index) => {
          return (
            <ReportCard
              labName='Los Altos Center Lab'
              testName={TRACK_TEST}
              isPending={true}
              key={index}
            />
          );
        })}
      </MuiBox>
      <Typography variant="subtitle1" className="subHeading">
        {RECENT_REPORTS}
      </Typography>
      <MuiBox className="reports">
        {recentReports.map((report, index) => {
          return (
            <ReportCard
              labName={report.labName}
              testName={report.testName}
              date={report.date}
              time={report.time}
              isPending={report.isPending}
              key={index}
            />
          );
        })}
      </MuiBox>
    </Box>
  );
};
