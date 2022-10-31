import { Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';

interface AQIValueProps {
  value: number;
}
export default function AQIComponent(props: AQIValueProps) {
  return (
    <>
      <article
        data-testid="aql-image"
        style={{
          background: theme.palette.background.default,
          display: 'grid',
          backgroundImage: `url("/images/Vectoraqi_image.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          placeItems: 'center',
          width: '170px',
          height: '170px',
          alignItems: 'center'
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.alpha600.main,
            textAlign: 'center'
          }}
        >
          {props.value}
        </Typography>
      </article>
    </>
  );
}
