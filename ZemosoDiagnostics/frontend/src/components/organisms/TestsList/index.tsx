import React from 'react';
import { Box as MuiBox, Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import { TESTS_LIST_LABEL, SEE_MORE } from '../../../utils/Messages';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import theme from '../../../theme';
import TestCard from '../../molecules/TestCard';
import { TEST_CARDS } from '../../../utils/Constants';
import { Link } from 'react-router-dom';

/**
 * @author Nagavinay Chinthada <nagavinay.chinthada@zemosolabs.com>
 */

const Box = styled(MuiBox)`
  width: 100%;

  .heading {
    display: flex;
    align-items: center;

    .seeMore {
      margin-left: auto;
      color: ${theme.palette.interactiveBlue500.main};

      .chevronsRightIcon {
        path {
          stroke: ${theme.palette.interactiveBlue500.main};
        }
      }
    }
  }

  .testCards {
    margin-top: 0.875rem;
  }
`;

export const TestsList = () => {
  return (
    <Box data-testid="tests-list">
      <MuiBox className="heading">
        <Typography>{TESTS_LIST_LABEL}</Typography>
        <Button className="seeMore" variant="text">
          <Typography variant="caption2">{SEE_MORE}</Typography>
          <Icon name="chevronsRight" className="chevronsRightIcon" />
        </Button>
      </MuiBox>
      <Grid container className="testCards" spacing={4.5}>
        {TEST_CARDS.map((test, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              {index === 1 ? (
                <Link to="/test-booking" style={{ textDecoration: 'none' }}>
                  <TestCard logo={test.logo} label={test.label} />
                </Link>
              ) : (
                <TestCard logo={test.logo} label={test.label} />
              )}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
