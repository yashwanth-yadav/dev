import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { SEE_MORE, TEST_YOU_CAN_CHOOSE_TEXT } from '../../../utils/Messages';
import { ImagePropsType } from '../../../utils/Types';
import Icon from '../../atoms/Icon';
import { TestPackageCard } from '../TestPackageCard';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

interface TestDetailsListProps {
  testDetailsList: {
    image: ImagePropsType['name'];
    title: string;
  }[];
}

const TestDetailsList = ({ testDetailsList }: TestDetailsListProps) => {
  return (
    <Box data-testid="test-details-list" sx={{ width: '100%' }}>
      <Box
        sx={{
          marginY: theme.spacing(20),
          marginX: { xl: '200px', lg: '150px', md: '100px', sm: '50px' }
        }}
      >
        <Box sx={{ display: 'flex', paddingBottom: theme.spacing(8) }}>
          <Typography
            variant="caption1"
            sx={{
              flex: '1',
              fontSize: theme.spacing(6),
              lineHeight: theme.spacing(7),
              wordBreak: 'break-word',
              color: theme.palette.gammaHigh.main
            }}
          >
            {TEST_YOU_CAN_CHOOSE_TEXT}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography
              variant="caption2"
              sx={{
                fontSize: theme.spacing(3.5),
                lineHeight: theme.spacing(5),
                wordBreak: 'break-word',
                color: theme.palette.interactiveBlue500.main
              }}
            >
              {SEE_MORE}
            </Typography>
            <Icon name="chevronsRight_h"></Icon>
          </Box>
        </Box>

        <Grid container>
          {testDetailsList.map((value, index) => {
            return (
              <Grid
                item
                lg={6}
                md={6}
                xl={4}
                sm={12}
                key={index}
                sx={{
                  paddingRight: theme.spacing(5),
                  paddingBottom: theme.spacing(5)
                }}
              >
                <TestPackageCard image={value.image} title={value.title} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default TestDetailsList;
