import { Box, ButtonBase, Grid, Modal, Typography } from '@mui/material';
import React from 'react';
import Close from '@mui/icons-material/Close';
import IconButtonAtom from '../../atoms/IconButton/IconButtonAtom';
import {
  ButtonsOfFilterPopup,
  filterItem,
  FilterTitles,
  GreenCommuteOptions
} from '../../../messages';
import CheckboxComponent from '../../molecules/Checkbox/CheckboxComponent';

import theme from '../../../theme';
import RadioButton from '../../molecules/RadioButton/RadioButton';

interface FilterProps {
  callBack?: any;
  handleFilterButton: () => void;
  filterConstants: any;
  openModal: boolean;
  handleCloseModal: () => void;
  handleFilteredValues: (list: string[]) => void;
  handleClearFilters: () => void;
  handleChecked: (
    position: number,
    array: filterItem[],
    arrayName: string
  ) => void;
  handleSaveFilters: () => void;
}

const filterStyle = {
  width: theme.spacing(140),
  height: theme.spacing(130),
  borderRadius: theme.spacing(2),
  backgroundColor: '#FFFFFF',
  top: '25%',
  margin: 'auto'
};

const Filter = (props: FilterProps) => {
  return (
    <div
      data-testid="filter"
      style={{ width: theme.spacing(156.25), backgroundColor: '#FFFFFF' }}
    >
      <Modal
        open={props.openModal}
        onClose={() => {
          props.handleCloseModal();
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box sx={filterStyle}>
          <ButtonBase
            sx={{
              marginLeft: theme.spacing(127.5),
              marginTop: theme.spacing(3.5)
            }}
            onClick={() => {
              props.handleCloseModal();
            }}
          >
            <Close data-testid="close" />
          </ButtonBase>
          <Grid
            container
            sx={{
              justifyContent: 'space-around',
              marginTop: theme.spacing(1.25)
            }}
          >
            <Grid item>
              <Grid item container flexDirection="column">
                <Grid item>
                  <Typography
                    variant="body1"
                    color={theme.palette.betaHigh.main}
                  >
                    {FilterTitles.DISTANCE}
                  </Typography>
                  {props.filterConstants.distance.map(
                    (
                      item: { value: string; isChecked: boolean | undefined },
                      i: number
                    ) => {
                      return (
                        <CheckboxComponent
                          key={i}
                          label={item.value}
                          defaultChecked={item.isChecked}
                          handleChecked={() =>
                            props.handleChecked(
                              i,
                              props.filterConstants.distance,
                              'distance'
                            )
                          }
                        />
                      );
                    }
                  )}
                </Grid>
                <Grid item sx={{ marginTop: theme.spacing(5) }}>
                  <Typography
                    variant="body1"
                    color={theme.palette.betaHigh.main}
                  >
                    {FilterTitles.JOB_TYPE}
                  </Typography>
                  {props.filterConstants.jobType.map(
                    (
                      item: { value: string; isChecked: boolean | undefined },
                      i: number
                    ) => {
                      return (
                        <CheckboxComponent
                          data-testid="checkbox"
                          key={i}
                          label={item.value}
                          defaultChecked={item.isChecked}
                          handleChecked={() =>
                            props.handleChecked(
                              i,
                              props.filterConstants.jobType,
                              'jobType'
                            )
                          }
                        />
                      );
                    }
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container flexDirection="column">
                <Grid item>
                  <Typography
                    variant="body1"
                    color={theme.palette.betaHigh.main}
                  >
                    {FilterTitles.DATE_POSTED}
                  </Typography>
                  {props.filterConstants.datePosted.map(
                    (
                      item: { value: string; isChecked: boolean | undefined },
                      i: number
                    ) => {
                      return (
                        <CheckboxComponent
                          key={i}
                          label={item.value}
                          defaultChecked={item.isChecked}
                          handleChecked={() =>
                            props.handleChecked(
                              i,
                              props.filterConstants.datePosted,
                              'datePosted'
                            )
                          }
                        />
                      );
                    }
                  )}
                </Grid>
                <Grid item sx={{ marginTop: theme.spacing(5) }}>
                  <Typography
                    variant="body1"
                    color={theme.palette.betaHigh.main}
                  >
                    {FilterTitles.EXPERIENCE_LEVEL}
                  </Typography>
                  {props.filterConstants.experienceLevel.map(
                    (
                      item: { value: string; isChecked: boolean | undefined },
                      i: number
                    ) => {
                      return (
                        <CheckboxComponent
                          data-testid="checkbox"
                          key={i}
                          label={item.value}
                          defaultChecked={item.isChecked}
                          handleChecked={() =>
                            props.handleChecked(
                              i,
                              props.filterConstants.experienceLevel,
                              'experienceLevel'
                            )
                          }
                        />
                      );
                    }
                  )}
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container flexDirection="column">
                <Grid item sx={{ height: theme.spacing(42.5) }}>
                  <RadioButton
                    label1={GreenCommuteOptions.OPTION1}
                    label2={GreenCommuteOptions.OPTION2}
                    title={FilterTitles.GREEN_COMMUTE}
                  />
                </Grid>
                <Grid item sx={{ marginTop: theme.spacing(9.75) }}>
                  <Typography
                    variant="body1"
                    color={theme.palette.betaHigh.main}
                  >
                    {FilterTitles.TRANSPORT}
                  </Typography>
                  {props.filterConstants.transport.map(
                    (
                      item: { value: string; isChecked: boolean | undefined },
                      i: number
                    ) => {
                      return (
                        <CheckboxComponent
                          key={i}
                          label={item.value}
                          defaultChecked={item.isChecked}
                          handleChecked={() =>
                            props.handleChecked(
                              i,
                              props.filterConstants.transport,
                              'transport'
                            )
                          }
                        />
                      );
                    }
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: theme.spacing(2.75),
              paddingRight: theme.spacing(6.25)
            }}
          >
            <IconButtonAtom
              variant="text"
              sx={{
                width: theme.spacing(25.25),
                height: theme.spacing(9.5),
                color: 'alpha400.main'
              }}
              handleClick={() => props.handleClearFilters()}
            >
              {ButtonsOfFilterPopup.BUTTON1}
            </IconButtonAtom>
            <IconButtonAtom
              variant="contained"
              sx={{
                width: theme.spacing(25.25),
                height: theme.spacing(9.5),
                bgcolor: 'alpha400.main',
                '&:hover': {
                  bgcolor: 'alpha400.main'
                }
              }}
              handleClick={() => props.handleSaveFilters()}
            >
              {ButtonsOfFilterPopup.BUTTON2}
            </IconButtonAtom>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Filter;
