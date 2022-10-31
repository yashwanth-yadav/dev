import { Grid, Divider } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';

import {
  dashboardIcon,
  bagIconSelected,
  bagNotSelected,
  heartNotSelected,
  heartSelected,
  practice,
  news,
  needHelp,
  contact,
  settings
} from '../../../utils/constants';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import Icons from '../../atoms/Icons/Icons';

interface Props {
  width?: string;
  height?: string;
  find?: boolean;
  setselectedSavedJobs: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideBar({
  width,
  height,
  find,
  setselectedSavedJobs
}: Props) {
  const [savedJobsSelected, setsavedJobsSelected] = useState(false);
  const [findJobsSelected, setfindJobsSelected] = useState(find);

  const handleFindJobs = () => {
    if (!findJobsSelected) {
      setfindJobsSelected(true);
      setselectedSavedJobs(false);
      setsavedJobsSelected(false);
    }
  };

  const handleSavedJobs = () => {
    if (!savedJobsSelected) {
      setsavedJobsSelected(true);
      setselectedSavedJobs(true);
      setfindJobsSelected(false);
    }
  };

  return (
    <>
      <Grid
        data-testid="sidebar"
        container
        alignItems="center"
        direction="column"
        sx={{
          width: width,
          height: height,
          background: 'gammaWhite.main'
        }}
      >
        <Grid
          item
          sx={{ marginTop: theme.spacing(10), marginBottom: theme.spacing(4) }}
        >
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: 'gammaWhite.main',
              color: 'betaHigh.main',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={<Icons icon={dashboardIcon} />}
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Dashboard'}
          </IconButtonAtom>
        </Grid>
        <Grid
          role="handleFindJobs"
          onClick={handleFindJobs}
          item
          sx={{ marginBottom: theme.spacing(4) }}
        >
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: findJobsSelected
                ? 'gammaColor1.main'
                : 'gammaWhite.main',
              color: findJobsSelected ? 'alpha500.main' : 'betaHigh.main',
              borderRight: findJobsSelected
                ? theme.spacing(1).toString() +
                  ' solid ' +
                  theme.palette.alpha500.main.toString()
                : '',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={
              findJobsSelected ? (
                <Icons icon={bagIconSelected} />
              ) : (
                <Icons icon={bagNotSelected} />
              )
            }
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Find Jobs'}
          </IconButtonAtom>{' '}
        </Grid>
        <Grid
          role="handleSavedJobs"
          onClick={handleSavedJobs}
          item
          sx={{ marginBottom: theme.spacing(4) }}
        >
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: savedJobsSelected
                ? 'gammaColor1.main'
                : 'gammaWhite.main',
              color: savedJobsSelected ? 'alpha500.main' : 'betaHigh.main',
              borderRight: savedJobsSelected
                ? theme.spacing(1).toString() +
                  ' solid ' +
                  theme.palette.alpha500.main.toString()
                : '',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={
              savedJobsSelected ? (
                <Icons icon={heartSelected} />
              ) : (
                <Icons icon={heartNotSelected} />
              )
            }
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Saved Jobs'}
          </IconButtonAtom>{' '}
        </Grid>
        <Grid item sx={{ marginBottom: theme.spacing(4) }}>
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: 'gammaWhite.main',
              color: 'betaHigh.main',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={<Icons icon={practice} />}
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Practice Tests'}
          </IconButtonAtom>{' '}
        </Grid>
        <Grid item sx={{ marginBottom: theme.spacing(4) }}>
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: 'gammaWhite.main',
              color: 'betaHigh.main',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={<Icons icon={news} />}
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'News & Events'}
          </IconButtonAtom>{' '}
        </Grid>
        <Grid
          item
          alignSelf="center"
          sx={{
            marginBottom: theme.spacing(4),
            backgroundColor: 'pink',
            width: theme.spacing(51.5)
          }}
        >
          <Divider
            light={true}
            textAlign="center"
            sx={{ background: theme.palette.beta200.main }}
          />
        </Grid>
        <Grid item sx={{ marginBottom: theme.spacing(4) }}>
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: 'gammaWhite.main',
              color: 'betaHigh.main',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={<Icons icon={needHelp} />}
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Need Help?'}
          </IconButtonAtom>{' '}
        </Grid>
        <Grid item sx={{ marginBottom: theme.spacing(4) }}>
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: 'gammaWhite.main',
              color: 'betaHigh.main',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={<Icons icon={contact} />}
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Contact Us'}
          </IconButtonAtom>{' '}
        </Grid>
        <Grid item sx={{ marginBottom: theme.spacing(4) }}>
          <IconButtonAtom
            sx={{
              height: theme.spacing(12),
              width: theme.spacing(67.5),
              backgroundColor: 'gammaWhite.main',
              color: 'betaHigh.main',
              '&:hover': {
                backgroundColor: 'gammaColor1.main',
                color: 'alpha500.main'
              }
            }}
            startIcon={<Icons icon={settings} />}
            textVariant="body2"
            variant="text"
            childernWidth={theme.spacing(27.5)}
          >
            {'Settings'}
          </IconButtonAtom>{' '}
        </Grid>
      </Grid>
    </>
  );
}
