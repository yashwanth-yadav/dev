/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import { Box } from '@mui/material';
import React from 'react';
import HomeTemplate from '../../components/templates/HomeTemplate';
import { AppointmentsInfo } from '../../components/molecules/AppointmentsInfo';
import { RECENT_TESTS, UPCOMING_TESTS } from '../../utils/Constants';
import { MyAppointmentCardProps } from '../../utils/Types';

interface MainComponentProps {
  upcomingTests: MyAppointmentCardProps[];
  recentTests: MyAppointmentCardProps[];
}

const MainComponent = ({ upcomingTests, recentTests }: MainComponentProps) => {
  return (
    <Box sx={{ marginTop: '100px', marginLeft: '11%' }}>
      <AppointmentsInfo
        upcomingTests={upcomingTests}
        recentTests={recentTests}
      />
    </Box>
  );
};

const MyAppointmentsPage = () => {
  return (
    <HomeTemplate
      mainComponent={
        <MainComponent
          upcomingTests={UPCOMING_TESTS}
          recentTests={RECENT_TESTS}
        />
      }
    />
  );
};

export default MyAppointmentsPage;
