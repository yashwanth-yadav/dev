/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { Box, Card as MuiCard, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import theme from '../../../theme';
import {
  TEST_MENU_ITEM,
  TEST_INFO_DETAILS,
  TEST_INFO_MESSAGES,
  REPORT_INFO,
  TEST_PRICE,
  TEST_INFO_TYPO
} from '../../../utils/Messages';
import Icon from '../../atoms/Icon';
import { TestMenuItem } from '../TestMenuItem';
import { TestInfoProps } from '../../../utils/Types';

const Card = styled(MuiCard)`
  max-width: ${theme.spacing(145.75)};
  min-height: ${theme.spacing(140)};
  box-shadow: ${theme.shadows[1]};
  .test-info-list {
    margin-top: ${theme.spacing(8)};
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .main-box {
    padding: ${theme.spacing(6)} ${theme.spacing(2.75)} ${theme.spacing(20)}
      ${theme.spacing(2.75)};
  }

  .test-info {
    margin-top: ${theme.spacing(5)};
    border: 1px solid ${theme.palette.grey100.main};
    border-radius: ${theme.spacing(3)};
    max-width: ${theme.spacing(102.5)};
    min-height: ${theme.spacing(8)};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    word-wrap: break-word;
    padding-right: ${theme.spacing(2.5)};
    padding-left: ${theme.spacing(1.25)};
  }

  .sub-test-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .text-main {
    width: 100%;
    ${theme.spacing(2.5)};
    min-height: ${theme.spacing(33)};
    display: flex;
    margin-top: ${theme.spacing(6)};
    flex-direction: column;
    justify-content: space-between;
    word-wrap: break-word;
  }
  .sub-text-main {
    width: 100%;
    display: flex;
    flex-direction: row;
    word-wrap: break-word;
  }
  .span-test-info {
    width: ${theme.spacing(1.5)};
    height: ${theme.spacing(1.5)};
    background-color: ${theme.palette.grey500.main};
    border-radius: 50%;
  }
  .span-text {
    margin-top: ${theme.spacing(2)};
    width: ${theme.spacing(1)};
    height: ${theme.spacing(1)};
    background-color: ${theme.palette.grey500.main};
    border-radius: 50%;
  }

  .text-typo {
    padding-left: ${theme.spacing(2)};
    color: ${theme.palette.gammaLow.main};
  }
`;
const TestInfo = ({ testName }: TestInfoProps) => {
  return (
    <Card data-testid="test-info" sx={{ borderRadius: theme.spacing(2) }}>
      <Box className="main-box">
        <Typography
          sx={{
            ...theme.typography.subtitle1,
            color: theme.palette.gammaHigh.main
          }}
        >
          {testName} Test
        </Typography>
        <Grid
          container
          sx={{
            marginTop: theme.spacing(8),
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          {TEST_MENU_ITEM.map((value, index) => {
            return (
              <Grid
                sm={3}
                lg={3}
                md={3}
                xs={6}
                item
                key={index}
                sx={{
                  paddingRight: theme.spacing(2),
                  paddingBottom: theme.spacing(2)
                }}
              >
                <TestMenuItem logo={value.logo} name={value.name} />
              </Grid>
            );
          })}
        </Grid>
        <Box className="test-info">
          <Box className="sub-test-info">
            <Icon name="dollar" />
            <Typography
              sx={{
                ...theme.typography.overline,
                color: theme.palette.gammaHigh.main
              }}
            >
              {TEST_PRICE}
            </Typography>
          </Box>
          <span className="span-test-info"></span>
          <Box className="sub-test-info">
            <Icon name="clock" />
            <Typography
              sx={{
                ...theme.typography.overline,
                paddingLeft: theme.spacing(1.5),
                color: theme.palette.gammaHigh.main
              }}
            >
              {REPORT_INFO}
            </Typography>
          </Box>
        </Box>
        <Box className="text-main">
          {TEST_INFO_DETAILS.map((text, index) => {
            return (
              <Box key={index} className="sub-text-main">
                <span className="span-text"></span>
                <Box>
                  <Typography
                    className="text-typo"
                    sx={{
                      ...theme.typography.overline
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ marginTop: theme.spacing(6.25) }}>
          <Typography
            sx={{
              ...theme.typography.caption1,
              color: theme.palette.gammaLow.main
            }}
          >
            {TEST_INFO_TYPO}
          </Typography>
        </Box>
        <Box sx={{ width: '100%', marginTop: theme.spacing(2.5) }}>
          <Grid
            container
            sx={{ alignItems: 'center', justifyContent: 'flex-start' }}
          >
            {TEST_INFO_MESSAGES.map((data, index) => {
              return (
                <Grid
                  md={4}
                  lg={4}
                  sm={4}
                  xs={12}
                  key={index}
                  sx={{
                    paddingRight: theme.spacing(2.5),
                    paddingBottom: theme.spacing(2.5)
                  }}
                  item
                >
                  <Box
                    sx={{
                      paddingX: theme.spacing(4),
                      paddingY: theme.spacing(4.25),
                      wordWrap: 'break-word',
                      backgroundColor: theme.palette.structuralPurple50.main,
                      borderRadius: theme.spacing(3)
                    }}
                  >
                    <Typography
                      sx={{
                        ...theme.typography.overline,
                        color: theme.palette.gammaHigh.main
                      }}
                    >
                      {data}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Card>
  );
};

export default TestInfo;
