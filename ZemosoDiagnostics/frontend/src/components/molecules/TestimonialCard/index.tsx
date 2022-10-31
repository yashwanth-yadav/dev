/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import theme from '../../../theme';
import Logo from '../../atoms/Logo';
import { TestimonialProps } from '../../../utils/Types';

const TestimonialCard = ({
  username,
  name,
  feedback,
  place
}: TestimonialProps) => {
  return (
    <Card
      data-testid="testimonial-card"
      elevation={0} 
      sx={{
        height: theme.spacing(42.5),
        backgroundColor: theme.palette.gammaWhite.main,
        borderRadius: theme.spacing(2),
        paddingTop: theme.spacing(4),
        paddingX: theme.spacing(2)
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box sx={{ marginLeft: theme.spacing(2.5) }}>
          <Logo name={name} />
        </Box>
        <Box sx={{ marginLeft: theme.spacing(4.5) }}>
          <Typography
            sx={{
              ...theme.typography.caption1,
              color: theme.palette.gammaMedium.main
            }}
          >
            {username}
          </Typography>
          <Typography
            sx={{
              ...theme.typography.caption1,

              color: theme.palette.gammaLow.main
            }}
          >
            {place}
          </Typography>

          <Typography
            sx={{
              ...theme.typography.caption2,
              wordBreak: 'break-word',
              paddingTop: theme.spacing(2.5),
              color: theme.palette.gammaMedium.main
            }}
          >
            {feedback}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TestimonialCard;
