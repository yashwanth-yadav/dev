import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import theme from '../../../theme';
import {
  CONTACT_US,
  HOME,
  PRIVACY_POLICY,
  TERMS_AND_CONDITIONS,
  ZEMOSO_DIAGNOSTICS
} from '../../../utils/Messages';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import Logo from '../../atoms/Logo';

/**
* @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
*/

export const Footer = () => {
  return (
    <Box
      data-testid="footer"
      sx={{
        width: '100%',
        height: '100%',
        minHeight: theme.spacing(64),
        backgroundColor: theme.palette.interactiveBlue800.main
      }}
    >
      <Box
        sx={{
          minHeight: theme.spacing(34),
          paddingY: theme.spacing(15),
          marginX: { xl: '200px', lg: '150px', md: '100px', sm: '50px' },
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box sx={{ flex: '1' }}>
          <Box display="flex">
            <Logo name="zemoso"></Logo>
            <Typography
              variant="body2"
              sx={{
                fontSize: theme.spacing(3),
                lineHeight: theme.spacing(4),
                color: theme.palette.gammaWhite.main,
                paddingLeft: theme.spacing(1)
              }}
            >
              {ZEMOSO_DIAGNOSTICS}
            </Typography>
          </Box>
          <Box sx={{ marginTop: theme.spacing(6) }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="overline2"
                sx={{
                  wordBreak: 'break-word',
                  color: theme.palette.interactiveBlue100.main
                }}
              >
                {HOME}
              </Typography>
            </NavLink>
          </Box>

          <Box sx={{ marginTop: theme.spacing(2) }}>
            <Typography
              variant="overline2"
              sx={{
                wordBreak: 'break-word',
                color: theme.palette.interactiveBlue100.main
              }}
            >
              {CONTACT_US}
            </Typography>
          </Box>

          <Box sx={{ marginTop: theme.spacing(2) }}>
            <Typography
              variant="overline2"
              sx={{
                wordBreak: 'break-word',
                color: theme.palette.interactiveBlue100.main
              }}
            >
              {PRIVACY_POLICY}
            </Typography>
          </Box>

          <Box sx={{ marginTop: theme.spacing(2) }}>
            <Typography
              variant="overline2"
              sx={{
                wordBreak: 'break-word',
                color: theme.palette.interactiveBlue100.main
              }}
            >
              {TERMS_AND_CONDITIONS}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              width: theme.spacing(25),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end'
            }}
          >
            <Box sx={{ paddingTop: theme.spacing(1.5) }}>
              <Image name="googlePlay"></Image>
            </Box>

            <Box sx={{ paddingTop: theme.spacing(5.1) }}>
              <Image name="appStore"></Image>
            </Box>
            <Box sx={{ display: 'flex', paddingTop: theme.spacing(5.1) }}>
              <Box>
                <Icon name="facebook"></Icon>
              </Box>
              <Box sx={{ paddingLeft: theme.spacing(4) }}>
                <Icon name="twitter"></Icon>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
