import { Typography, Box, Grid } from '@mui/material';
import React from 'react';
import {
  CLEAR_ALL,
  BASED_ON_YOUR_TYPO,
  FIND_JOBS_TYPO,
  JOB_LIST_TYPO,
  filterItem
} from '../../../messages';
import theme from '../../../theme';
import { filterIcon, jobData } from '../../../utils/constants';
import ChipRect from '../../atoms/Chip/ChipRect';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import Icons from '../../atoms/Icons/Icons';
import Filter from '../../organisms/FilterPopup/Filter';
import JobDescriptionCard from '../../organisms/JobDescriptionCard/JobDescriptionCard';
import PrimaryJobCard from '../../organisms/PrimaryJobCard/PrimaryJobCard';

import SearchBar from '../../organisms/SearchBar/SearchBar';
import SecondaryJobCard from '../../organisms/SecondaryJobCard/SecondaryJobCard';
interface Props {
  filterConstants: any;
  handleFilterButton: () => void;
  openModal: boolean;
  handleCloseModal: () => void;
  handleFilteredValues: (list: string[]) => void;
  filteredVales: any[];
  clearAllFilters: () => void;
  getJob: (id: number) => void;
  handleSearch: (searchLoc: string, searchSkill: string) => void;
  jobs: jobData[];
  selectedJob?: jobData;
  handleClearFilters: () => void;
  handleChecked: (
    position: number,
    array: filterItem[],
    arrayName: string
  ) => void;
  handleSaveFilters: () => void;
  handleDeleteChip: (id: number) => void;
  handleSaveButton: (id: number | undefined) => void;
  isSaved?: boolean;
  handleJobLClick: (id: number) => void;
  saveLoad: boolean
}

export default function MainComponent(props: Props) {
  return (
    <Box
      sx={{
        marginX: theme.spacing(2.5),
        marginTop: theme.spacing(25),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        width: '100%'
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '1.5rem',
              lineHeight: theme.spacing(7.5),
              color: theme.palette.betaHigh.main
            }}
          >
            {FIND_JOBS_TYPO}
          </Typography>
        </Grid>
        <Grid item sx={{ paddingTop: theme.spacing(2.5) }}>
          <Grid container direction="row" justifyContent="center">
            <Grid item md={9} sm={9}>
              <SearchBar
                jobLocation={'Hyd'}
                handleSearch={props.handleSearch}
              />
            </Grid>
            <Grid item md={3} sm={3} sx={{ paddingX: theme.spacing(2.5) }}>
              <>
                <IconButtonAtom
                  handleClick={() => {
                    console.log('In filter button ');

                    props.handleFilterButton();
                  }}
                  sx={{
                    height: theme.spacing(14),
                    width: theme.spacing(34.25),
                    backgroundColor: 'gammaWhite.main',
                    cursor: 'pointer',
                    color: 'betaHigh.main',
                    borderRadius: theme.spacing(8)
                  }}
                  textVariant="body2"
                  variant="text"
                  startIcon={
                    <Icons
                      icon={filterIcon}
                      height={theme.spacing(6)}
                      width={theme.spacing(6)}
                    />
                  }
                >
                  {'Filter'}
                </IconButtonAtom>

                <Filter
                  handleFilteredValues={props.handleFilteredValues}
                  handleCloseModal={props.handleCloseModal}
                  openModal={props.openModal}
                  handleFilterButton={props.handleFilterButton}
                  filterConstants={props.filterConstants}
                  handleClearFilters={props.handleClearFilters}
                  handleChecked={props.handleChecked}
                  handleSaveFilters={props.handleSaveFilters}
                />
              </>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ marginTop: theme.spacing(7.5) }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '1.5rem',
              lineHeight: theme.spacing(7.5),
              color: theme.palette.betaHigh.main
            }}
          >
            {JOB_LIST_TYPO}
          </Typography>
        </Grid>

        <Grid item sx={{ marginTop: theme.spacing(1.25) }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '1.125rem',
              lineHeight: theme.spacing(5.5),
              color: theme.palette.betaMedium.main
            }}
          >
            {BASED_ON_YOUR_TYPO}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="flex-start" alignItems="flex-start">
            <Grid
              item
              sx={{
                paddingTop: theme.spacing(2.5),
                marginLeft: theme.spacing(0.75),
                maxWidth: theme.spacing(135)
              }}
            >
              {props.filteredVales.length > 0 &&
                props.filteredVales?.map((value) => {
                  return (
                    value.isChecked && (
                      <Grid
                        item
                        sx={{
                          display: 'inline-block',

                          marginBottom: theme.spacing(2)
                        }}
                        key={value.id}
                      >
                        <ChipRect
                          title={value.value}
                          handleDelete={() => {
                            console.log('CLicked chip', value);
                            props.handleDeleteChip(value.id);
                          }}
                          color={theme.palette.gammaWhite.main}
                        />
                      </Grid>
                    )
                  );
                })}
            </Grid>
            {props.filteredVales?.length > 0 && (
              <Grid
                item
                onClick={() => {
                  props.clearAllFilters();
                }}
                sx={{
                  borderBottom: `${theme.spacing(0.5)} solid ${
                    theme.palette.alpha300.main
                  }`,

                  marginLeft: theme.spacing(3),
                  cursor: 'pointer',
                  marginTop: theme.spacing(3)
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: theme.spacing(4.5),
                    lineHeight: theme.spacing(5.5),
                    color: theme.palette.alpha300.main
                  }}
                >
                  {CLEAR_ALL}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>

      <Box>
        {props.selectedJob == undefined ? (
          <Grid container>
            {props.jobs.map((job) => {
              return (
                <Grid
                  item
                  xl={3}
                  md={6}
                  lg={4}
                  sm={12}
                  key={job.id}
                  sx={{
                    display: 'grid',
                    paddingTop: theme.spacing(2.5),
                    paddingRight: theme.spacing(2.5)
                  }}
                >
                  <PrimaryJobCard
                    id={job.id}
                    logo={job.logo}
                    company={job.company}
                    jobRole={job.jobRole}
                    handleClick={() => props.getJob(job.id)}
                    location={`${job.city}, ${job.location}, India`}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Box>
            <Grid container direction="row">
              <Grid
                item
                direction="column"
                md={7}
                xs={8}
                lg={8}
                xl={8}
                sx={{
                  paddingRight: theme.spacing(2.5),

                  maxHeight: theme.spacing(183.5),
                  overflowY: 'scroll',
                  '&::-webkit-scrollbar': { display: 'none' }
                }}
              >
                {props.jobs.map((job) => {
                  return (
                    <Grid
                      item
                      sx={{
                        paddingBottom: theme.spacing(2.5)
                      }}
                      key={job.id}
                    >
                      <SecondaryJobCard
                        logo={job.logo}
                        company={job.company}
                        jobRole={job.jobRole}
                        onClick={() => props.handleJobLClick(job.id)}
                        time={job.time}
                        location={job.location}
                        city={job.city}
                        state={job.state}
                        pincode={job.pincode}
                        isActive={job.isActive}
                      />
                    </Grid>
                  );
                })}
              </Grid>

              <Grid
                item
                sx={{
                  marginLeft: 'auto'
                }}
                md={5}
                lg={4}
                xl={4}
                xs={4}
              >
                <JobDescriptionCard
                  logo={props.selectedJob.logo}
                  jobRole={props.selectedJob.jobRole}
                  company={props.selectedJob.company}
                  location={props.selectedJob.location}
                  city={props.selectedJob.city}
                  state={props.selectedJob.state}
                  pincode={props.selectedJob.pincode}
                  time={props.selectedJob.time}
                  routeSource="E Marredpally, Secunderabad"
                  routeDestination="Hitech City, Telanagana, Hyderabad."
                  handleSave={() =>
                    props.handleSaveButton(
                      props.selectedJob && props.selectedJob.id
                    )
                  }
                  isSaved={props.isSaved}
                  saveLoad = {props.saveLoad}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}
