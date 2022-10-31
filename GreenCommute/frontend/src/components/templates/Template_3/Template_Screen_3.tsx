import { Box, Grid } from '@mui/material';

import React from 'react';
import theme from '../../../theme';

import SideBar from '../../organisms/SideBar/SideBar';
import HeaderComponent from '../../organisms/HeaderComponent/Header';
import Icons from '../../atoms/Icons/Icons';
import { loading } from '../../../utils/constants';

interface Template_3_Props {
  mainComponent?: JSX.Element;
  setselectedSavedJobs: React.Dispatch<React.SetStateAction<boolean>>;
  currentLoc?: string;
  load?: boolean;
}

export default function Template_Screen_3(props: Template_3_Props) {
  return (
    <>
      <HeaderComponent currentLoc={props.currentLoc} />

      <Grid
        container
        data-testid="screen3"
        sx={{ height: '100%', boxShadow: theme.shadows[1] }}
      >
        <Grid
          item
          sx={{
            marginTop: theme.spacing(20),
            background: 'gammaWhite.main'
          }}
        >
          <SideBar
            setselectedSavedJobs={props.setselectedSavedJobs}
            width={theme.spacing(67.5)}
            height="100%"
            find={true}
          />
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            flex: '1',
            height: '100%',
            overflowY: 'scroll',
            backgroundColor: !props.load
              ? theme.palette.gammaWhite.main
              : theme.palette.mainBackground.main
          }}
        >
          {props.load ? (
            props.mainComponent
          ) : (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icons
                icon={loading}
              />
            </Box>
          )}
        
        </Grid>
      </Grid>
    </>
  );
}
