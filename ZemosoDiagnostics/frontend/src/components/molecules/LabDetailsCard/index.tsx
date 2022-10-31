import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme, { EXTRA_COLORS } from '../../../theme';
import { LabDetailCardProps } from '../../../utils/Types';
import Icon from '../../atoms/Icon';
import Logo from '../../atoms/Logo';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const CardComponent = styled(Card)`
  width: 535px;
  height: 144px;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  &.MuiPaper-elevation0 {
    box-shadow: 0px 0px 8px ${theme.palette.grey100.main};
  }
`;

const CardContentComponent = styled(CardContent)`
  height: 120px;
  width: 258px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: '0px';

  .calendarIcon {
    path {
      stroke: ${theme.palette.greenSuccess.main};
    }
  }
`;

const LabDetailsCard = ({
  selected,
  onClick,
  lab,
  ...props
}: LabDetailCardProps) => {
  return (
    <CardComponent
      elevation={0}
      onClick={onClick}
      sx={{
        border: selected
          ? `2px solid ${EXTRA_COLORS.BETA_PURPLE}`
          : '2px solid transparent',
        cursor: 'pointer'
      }}
      {...props}
    >
      <Box
        sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ml: '12px',
          mt: '12px'
        }}
      >
        <Logo name="altos" />
      </Box>
      <CardContentComponent
        sx={{
          pt: '12px',
          position: 'relative',
          right: '12px'
        }}
      >
        <Typography variant="body1" sx={{ height: '20px' }}>
          {lab.name}
        </Typography>

        <Stack
          direction="row"
          gap={'25px'}
          alignItems={'center'}
          sx={{ height: '20px' }}
        >
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            sx={{ position: 'relative', top: '2px' }}
          >
            <Icon name="card" sx={{ position: 'relative', top: '3px' }} />
            <Typography variant="overline" sx={{ color: 'gammaMedium.main' }}>
              {lab.rating}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            gap={'5.5px'}
          >
            <Icon name="calendar" className="calendarIcon" />
            <Typography variant="caption1" sx={{ color: 'greenSuccess.main' }}>
              {lab.slotsAvailable} Slots Available
            </Typography>
          </Box>
        </Stack>
        <Typography
          variant="caption2"
          sx={{ height: '20px', color: 'gammaMedium.main' }}
        >
          {lab.reportTime}
        </Typography>
        <Typography variant="overline" sx={{ height: '20px' }}>
          $1200 for 1 Test
        </Typography>
      </CardContentComponent>
      {selected && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            flexGrow: 1,
            pr: '12px',
            pt: '12px'
          }}
        >
          <Icon name="selected" />
        </Box>
      )}
    </CardComponent>
  );
};

export default LabDetailsCard;
