import { Card, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import Icon from '../../atoms/Icon';
import Button from '../../atoms/Button';
import { ReviewDetailsProps } from '../../../utils/Types';
import { TIME_SLOT_SELECTED } from '../../../utils/Messages';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const CardComponent = styled(Card)`
  height: 92px;
  border-radius: 12px;
  &.MuiPaper-elevation0 {
    border: 1px solid ${theme.palette.grey100.main};
  }
`;

const ReviewDetails = ({ date, time, onClick }: ReviewDetailsProps) => {
  return (
    <CardComponent elevation={0}>
      <Stack
        direction={'column'}
        sx={{  marginTop: '16px', marginLeft: '16px' }}
      >
        <Stack direction={'row'} alignItems={'center'} sx={{ height: '18px' }}>
          <Icon name="calendar" sx={{ width: '20px', height: '20px' }} />
          <Typography
            variant="overline2"
            sx={{ marginLeft: '8px', color: 'gammaLow.main' }}
          >
            {TIME_SLOT_SELECTED}
          </Typography>
          <Button
            disableRipple
            disableFocusRipple
            disableElevation
            onClick={onClick}
            sx={{
              width: 'fit-content',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              flexGrow: 1,
              '&:hover': {
                background: 'transparent'
              },
              color: 'interactiveBlue500.main'
            }}
          >
            <Typography variant="overline2">Change</Typography>
          </Button>
        </Stack>
        <Divider sx={{ margin: '8px 0px' }} />
        <Stack direction={'row'} sx={{ height: '26px', pt: '8px' }}>
          <Typography variant="overline2" sx={{ color: 'gammaHigh.main' }}>
            {date}
          </Typography>
          <Divider
            orientation={'vertical'}
            sx={{ marginLeft: '12px', marginRight: '12px', height: '18px' }}
          />
          <Typography variant="overline2">{time}</Typography>
        </Stack>
      </Stack>
    </CardComponent>
  );
};

export default ReviewDetails;
