import { Avatar } from '@mui/material';
import React from 'react';

const AvatarIcon = () => {
  return (
    <div>
      <Avatar
        sx={{
          width: '36px',
          height: '36px',
          backgroundColor: 'alpha400.main'
        }}
      >
        S
      </Avatar>
    </div>
  );
};

export default AvatarIcon;
