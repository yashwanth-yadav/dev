import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from '../../atoms/Logo';
import theme from '../../../theme';
import LocationPicker from '../../molecules/LocationPicker';
import NavItem from '../../molecules/NavItem';
import Icon from '../../atoms/Icon';
import AccountInfo from '../AccountInfo';
import { ACCOUNT_OPTIONS_LIST, USER_DATA } from '../../../utils/Messages';
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const [isModalClosed, setisModalClosed] = useState(true);
  const { user } = useAuth0();

  const handleCloseModal = () => {
    setisModalClosed(true);
  };
  const handleOpenModal = () => {
    setisModalClosed(false);
  };

  const path = useLocation();
  return (
    <Box data-testid="header">
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.gammaWhite.main,
          boxShadow: theme.shadows[3]
        }}
      >
        <Toolbar
          sx={{
            mx: {
              xl: '200px',
              lg: '150px',
              md: '100px',
              sm: '50px'
            }
          }}
        >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: {
                  sm: 'block',
                  xs: 'block',
                  md: 'none'
                }
              }}
            >
              <Logo name="zemoso" />
            </IconButton>
          </Link>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' }
            }}
          >
            <Logo name="zemosoLogo" />
          </Box>

          <Box sx={{ flex: 1 }}></Box>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxWidth: theme.spacing(69),
              alignItems: 'center'
            }}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <NavItem label="Home" selected={path.pathname == '/'} />
            </Link>
            <Link to="/reports" style={{ textDecoration: 'none' }}>
              <NavItem label="Reports" selected={path.pathname == '/reports'} />
            </Link>
            <Link to="/appointments" style={{ textDecoration: 'none' }}>
              <NavItem
                label="My Appointments"
                selected={path.pathname == '/appointments'}
              />
            </Link>
          </Box>
          <Box sx={{ flex: 1 }}></Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              justifyContent: 'space-between',
              maxWidth: theme.spacing(93.75),
              alignItems: 'center',
              flexGrow: 1
            }}
          >
            <Box
              sx={{
                marginLeft: theme.spacing(1.25),
                display: {
                  sm: 'none',
                  md: 'none',
                  lg: 'block',
                  xl: 'block'
                }
              }}
            >
              <LocationPicker />
            </Box>
            <Box
              data-testid="open-modal-button"
              onClick={handleOpenModal}
              sx={{
                paddingTop: theme.spacing(1.25),
                marginLeft: theme.spacing(2.5),
                cursor: 'pointer'
              }}
            >
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                color="inherit"
              >
                <Icon name="user" />
              </IconButton>
            </Box>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <Icon name="cart" />{' '}
            </IconButton>
          </Box>
          <Box
            onClick={handleOpenModal}
            sx={{ display: { xs: 'flex', md: 'none' }, cursor: 'pointer' }}
          >
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <Icon name="user" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <AccountInfo
        accountOptionsList={ACCOUNT_OPTIONS_LIST}
        handleClose={handleCloseModal}
        isClosed={isModalClosed}
        username={
          user !== undefined && user.name !== undefined ? user.name : ''
        }
        email={user !== undefined && user.email !== undefined ? user.email : ''}
        phoneNumber={USER_DATA.phoneNumber}
        name={'Avatar'}
      />
    </Box>
  );
};

export default Header;
