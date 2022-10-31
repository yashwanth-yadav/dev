import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import theme from '../../theme';
import { jobData } from '../../utils/constants';
import SecondaryJobCard from '../organisms/SecondaryJobCard/SecondaryJobCard';

interface SavedJobsProps {
  jobsList: jobData[];
}

export default function SavedJobsPage(props: SavedJobsProps) {
  return (
    <Box
      sx={{
        width: '100%',
        marginX: theme.spacing(2.5),
        marginTop: theme.spacing(25),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5)
      }}
    >
      <Typography
        sx={{
          fontFamily: theme.typography.fontFamily,
          ...theme.typography.h2
        }}
      >
        Saved Jobs
      </Typography>

      <Grid container direction="column">
        {props.jobsList.map((job) => {
          return (
            job.isSaved && (
              <Grid
                item
                key={job.id}
                sx={{ padding: theme.spacing(2), width: '75%' }}
                xl={6}
                md={12}
                lg={6}
                sm={12}
              >
                <SecondaryJobCard
                  logo={job.logo}
                  company={job.company}
                  jobRole={job.jobRole}
                  onClick={() => console.log('Secondary card')}
                  time={job.time}
                  location={job.location}
                  city={job.city}
                  state={job.state}
                  pincode={''}
                />
              </Grid>
            )
          );
        })}
      </Grid>
    </Box>
  );
}
