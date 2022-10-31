/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */
import { Box, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { AccountOptionsProps } from '../../../utils/Types';
import Icon from '../../atoms/Icon';

const AccountOption = ({
  startIcon,
  endIcon,
  primaryText,
  handleOnClick,
  secondaryText
}: AccountOptionsProps) => {
  return (
    <Box
      data-testid={`${primaryText}-account-option`}
      onClick={handleOnClick}
      sx={{
        maxWidth: theme.spacing(152.5),
        minHeight: theme.spacing(18.5),
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          minWidth: '200px',
          paddingLeft: theme.spacing(6.25),
          flexDirection: 'row',
          width: '100%'
        }}
      >
        <Box sx={{ paddingTop: theme.spacing(4) }}>
          <Icon name={startIcon} />
        </Box>
        <Box
          sx={{
            paddingLeft: theme.spacing(2),
            paddingTop: theme.spacing(4),
            width: '100%'
          }}
        >
          <Typography
            noWrap={true}
            sx={{
              ...theme.typography.body,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              color: theme.palette.gammaMedium.main
            }}
          >
            {primaryText}
          </Typography>
          {secondaryText && (
            <Typography
              noWrap={true}
              sx={{
                paddingTop: theme.spacing(1),
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                ...theme.typography.gammaRegular,
                color: theme.palette.gammaLow.main
              }}
            >
              {secondaryText}
            </Typography>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: 'auto',
          display: 'flex',
          paddingTop: theme.spacing(5),
          justifyContent: 'center'
        }}
      >
        <Icon name={endIcon} />
      </Box>
    </Box>
  );
};

export default AccountOption;
