/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */
import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '../../../theme';
import { EDIT_BUTTON_TYPO } from '../../../utils/Messages';
import { ProfileInfoProps } from '../../../utils/Types';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';

const ProfileInfo = ({
  username,
  phoneNumber,
  email,
  name
}: ProfileInfoProps) => {
  return (
    <Box
      data-testid="profile-info"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        maxWidth: theme.spacing(107.5),
        minHeight: theme.spacing(20.5),
        height: '100%',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <Box sx={{ paddingLeft: theme.spacing(2) }}>
        <Logo name={name} />
      </Box>
      <Box
        sx={{
          paddingX: theme.spacing(3),
          paddingY: theme.spacing(2.5),
          flex: '1',
          minWidth: '150px'
        }}
      >
        <Typography
          noWrap={true}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            ...theme.typography.subtitle1,
            color: theme.palette.gammaHigh.main
          }}
        >
          {username}
        </Typography>
        <Typography
          noWrap={true}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            paddingTop: theme.spacing(1),
            
            ...theme.typography.gammaRegular,
            color: theme.palette.gammaLow.main
          }}
        >
          {email}
        </Typography>
        <Typography
           noWrap={true}
           sx={{
             overflow: 'hidden',
             textOverflow: 'ellipsis',
            paddingTop: theme.spacing(0.5),
            ...theme.typography.gammaRegular,
            color: theme.palette.gammaLow.main
          }}
        >
          {phoneNumber}
        </Typography>
      </Box>
      <Box sx={{ padingX: theme.spacing(2) }}>
        <Button variant="text">
          <Typography
            sx={{
              ...theme.typography.body2,
              color: theme.palette.interactiveBlue500.main
            }}
          >
            {EDIT_BUTTON_TYPO}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
