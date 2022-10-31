import React from 'react';
import { Card as MuiCard, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import Image from '../../atoms/Image';
import { ImagePropsType } from '../../../utils/Types';
import {
  REPORTS_READY_TEXT,
  STARTING_FROM_TEXT,
  TESTS_NUMBER,
  VIEW_DETAILS_TEXT
} from '../../../utils/Messages';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

const Card = styled(MuiCard)`
  min-height: ${theme.spacing(47.5)};
  border: 1px solid #f8f8fa;
  width: 100%;
  height: 100%;
  min-width: ${theme.spacing(95.5)};
  box-shadow: 0px 0px 12px rgba(233, 232, 237, 0.53);
`;

export interface TestPackageCardPropsType {
  image: ImagePropsType['name'];
  title: string;
}

export const TestPackageCard = ({ image, title }: TestPackageCardPropsType) => {
  return (
    <Card
      data-testid="package_card"
      sx={{
        borderRadius: theme.spacing(2),
        minHeight: theme.spacing(47.5),

        width: '100%',
        height: '100%',
        display:'flex'
      }}
    >
      <Grid container>
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: theme.spacing(3)
          }}
        >
          <Image
            style={{
              marginTop: theme.spacing(3),
              paddingLeft: theme.spacing(1.75)
            }}
            name={image}
          />
        </Grid>
        <Grid item 
        lg={6}
          md={6}
          sm={6}
          xs={6}
          >
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                paddingLeft: theme.spacing(4.5),
                paddingTop: theme.spacing(3)
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.gammaHigh.main,
                  ...theme.typography.subtitle1,
                  fontSize: theme.spacing(4)
                }}
              >
                {' '}
                {title}{' '}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                paddingLeft: theme.spacing(4.5),
                paddingTop: theme.spacing(2)
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.gammaMedium.main,
                  ...theme.typography.body2,
                  fontSize: theme.spacing(4)
                }}
              >
                {' '}
                {STARTING_FROM_TEXT}{' '}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                paddingLeft: theme.spacing(4.5),
                paddingTop: theme.spacing(2)
              }}
              xs={12}
            >
              <Typography
                sx={{
                  color: theme.palette.gammaLow.main,
                  ...theme.typography.body2,
                  fontSize: theme.spacing(3)
                }}
              >
                {' '}
                {REPORTS_READY_TEXT}{' '}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                paddingLeft: theme.spacing(4.5),
                paddingTop: theme.spacing(2)
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.gammaLow.main,
                  ...theme.typography.body2,
                  fontSize: theme.spacing(3)
                }}
              >
                {' '}
                {TESTS_NUMBER}{' '}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                paddingLeft: theme.spacing(4.5),
                paddingTop: theme.spacing(8.1)
              }}
            >
              <Typography
                sx={{
                  color: theme.palette.gammaLow.main,
                  textDecoration: 'underline',
                  ...theme.typography.subtitle1,
                  fontSize: theme.spacing(3)
                }}
              >
                {' '}
                {VIEW_DETAILS_TEXT}{' '}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
