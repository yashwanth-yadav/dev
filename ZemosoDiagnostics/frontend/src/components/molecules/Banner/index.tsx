/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import {
  BANNER_SECONDARY_TYPO,
  BANNER_HEADING_TYPO,
  BOOK_NOW_TYPO
} from '../../../utils/Messages';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';

const Banner = () => {
  return (
    <Box
      data-testid="banner"
      sx={{
        borderRadius: theme.spacing(2),
        width: '100%',
        backgroundColor: theme.palette.interactiveBlue800.main,
        height: theme.spacing(51.5),
        maxHeight: 'fit-content'
      }}
    >
      <Grid container sx={{display: 'flex', flexWrap:'wrap', height: 'fit-content'}}>
        <Grid item lg={8} md={8} sm={7} xs={12}>
          <Box
            sx={{
              marginLeft: theme.spacing(12.5),
              marginTop: theme.spacing(10)
            }}
          >
            <Box>
              <Typography variant="h1" color={theme.palette.gammaWhite.main}>
                {BANNER_HEADING_TYPO}
              </Typography>{' '}
            </Box>

            <Box>
              <Typography
                variant="caption1"
                color={theme.palette.gammaWhite.main}
              >
                {BANNER_SECONDARY_TYPO}{' '}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: theme.spacing(10),
                [theme.breakpoints.down('sm')]: {
                  paddingBottom: theme.spacing(2.5)
                }
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: theme.spacing(2),
                  backgroundColor: theme.palette.gammaWhite.main,
                  '&:hover': {
                    backgroundColor: theme.palette.gammaWhite.main
                  }
                }}
              >
                <Typography
                  variant="body1"
                  color={theme.palette.interactiveBlue800.main}
                >
                  {BOOK_NOW_TYPO}
                </Typography>{' '}
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={5}
          sx={{
            [theme.breakpoints.down('sm')]: {
              display: 'none'
            },

            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Image style={{ marginTop: theme.spacing(3) }} name="family" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
