import { Box as MuiBox, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { RECENT_TESTS, REPORTS, UPCOMING_TESTS } from '../../../utils/Messages';
import {
  MyAppointmentCardProps,
  MyAppointmentCardPropsType
} from '../../../utils/Types';
import MyAppointmentCard from '../MyAppointmentCard';
import { Box } from '../ReportsInfo';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

export const AppointmentsInfo = ({
  upcomingTests,
  recentTests
}: MyAppointmentCardPropsType) => {
  const getMyAppointmentCards = (tests: MyAppointmentCardProps[]) => {
    return tests.map((test, index) => {
      return (
        <MyAppointmentCard
          startLogo={test.startLogo}
          testName={test.testName}
          labName={test.labName}
          day={test.day}
          patientName={test.patientName}
          date={test.date}
          fromTime={test.fromTime}
          toTime={test.toTime}
          key={index}
        />
      );
    });
  };
  return (
    <Box data-testid="appointments-info">
      <Typography
        variant="h1"
        className="heading"
        color={`${theme.palette.gammaMedium.main}`}
      >
        {REPORTS}
      </Typography>
      <Typography variant="subtitle1" className="subHeading">
        {UPCOMING_TESTS}
      </Typography>
      <MuiBox className="reports">
        {getMyAppointmentCards(upcomingTests)}
      </MuiBox>
      <Typography variant="subtitle1" className="subHeading">
        {RECENT_TESTS}
      </Typography>
      <MuiBox className="reports">{getMyAppointmentCards(recentTests)}</MuiBox>
    </Box>
  );
};
