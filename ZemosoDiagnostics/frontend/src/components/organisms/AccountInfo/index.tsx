import { Box, Card, Dialog } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { AccountInfoListProps } from '../../../utils/Types';
import Icon from '../../atoms/Icon';
import AccountOption from '../../molecules/AccountOption';
import ProfileInfo from '../../molecules/ProfileInfo';
import { useAuth0 } from '@auth0/auth0-react';

const AccountInfo = ({
  accountOptionsList,
  name,
  username,
  phoneNumber,
  email,
  handleClose,
  isClosed
}: AccountInfoListProps) => {
  const { logout } = useAuth0();

  return (
    <div data-testid="account-info-list">
      <Dialog
        open={!isClosed}
        sx={{
          '& .MuiDialog-container': {
            '& .MuiPaper-root': {
              height: '100%',
              width: '100%',
              maxHeight: '100%',
              maxWidth: theme.spacing(170),
              position: 'absolute',
              right: 0,
              margin: 0,
              overflowY: 'overlay'
            }
          }
        }}
      >
        <Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
          >
            <Box
              data-testid="close-modal"
              sx={{
                paddingRight: theme.spacing(8),
                paddingTop: theme.spacing(8),
                cursor: 'pointer'
              }}
              onClick={handleClose}
            >
              <Icon name="close" />
            </Box>
          </Box>
          <Box
            sx={{
              paddingX: theme.spacing(8),
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <ProfileInfo
              username={username}
              email={email}
              phoneNumber={phoneNumber}
              name={name}
            />
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'center',
                paddingRight: theme.spacing(7.5),
                marginTop: theme.spacing(2.5)
              }}
            >
              {accountOptionsList.map((value, index) => {
                return (
                  <AccountOption
                    key={index}
                    startIcon={value.startIcon}
                    primaryText={value.primaryText}
                    endIcon={value.endIcon}
                    secondaryText={value.secondaryText}
                    handleOnClick={
                      value.primaryText === 'Logout'
                        ? () =>
                            logout({
                              returnTo: 'https://3.144.239.72/signup'
                            })
                        : value.handleOnClick
                    }
                  />
                );
              })}
            </Box>
          </Box>
        </Card>
      </Dialog>
    </div>
  );
};

export default AccountInfo;
