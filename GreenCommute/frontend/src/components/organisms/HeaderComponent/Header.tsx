import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import MoreIcon from '@mui/icons-material/MoreVert';

import theme from '../../../theme';
import AvatarIcon from '../../atoms/AvatarIcon/AvatarIcon';
import {
  GreenCommuteLogo,
  MessagesIcon,
  NotificationIcon
} from '../../../utils/constants';
import Icons from '../../atoms/Icons/Icons';
import SearchCurrentLocation from '../../molecules/BC40GC-SearchCurrentLocation/SearchCurrentLocation';

interface HeaderProps {
  currentLoc?: string;
}

export default function HeaderComponent(props: HeaderProps) {
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  return (
    <Box data-testid="header" sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: theme.palette.alpha600.main }}
      >
        <Toolbar>
          <Icons icon={GreenCommuteLogo} />
          <Box sx={{ marginLeft: theme.spacing(50) }}>
            <SearchCurrentLocation currentLocation={props.currentLoc} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Icons icon={MessagesIcon} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Icons icon={NotificationIcon} />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <AvatarIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
