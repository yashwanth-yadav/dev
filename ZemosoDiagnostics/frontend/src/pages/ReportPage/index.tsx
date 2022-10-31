import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import theme from '../../theme';
import { RECENT_REPORTS, UPCOMING_REPORTS } from '../../utils/Constants';
import { ReportsInfo } from '../../components/molecules/ReportsInfo';
import HomeTemplate from '../../components/templates/HomeTemplate';
import { UrlService } from '../../ApiService/UrlService';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
const ReportsPage = () => {

  const [reports, setReports] = useState<any>([]);
  const {user}=useAuth0();
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://cloud-svc.zemosodia50.ga/appointments/${user?.sub}`);
      setReports(data);
    }
    getData();
  }, [])
  console.log(reports);
  const MainContent = () => {
    return (
      <Box sx={{ marginTop: '100px', marginLeft: '11%' }}>
        <ReportsInfo
          upcomingReports={reports}
          recentReports={RECENT_REPORTS}
        ></ReportsInfo>
      </Box>
    );
  };
  return (
      <HomeTemplate mainComponent={<MainContent />} />
  );
};

export default ReportsPage;
