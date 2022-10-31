import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import Button from '../../components/atoms/Button';
import Icon from '../../components/atoms/Icon';
import Image from '../../components/atoms/Image';
import { FormTemplate } from '../../components/templates/FormTemplate';
import { NavLink } from 'react-router-dom';
import {
  BACK_TO_HOME,
  INSTRUCTIONS,
  INSTRUCTION_TEXT,
  ORDER_PLACED,
  TRACK_YOUR_ORDER
} from '../../utils/Messages';

const SideBox = styled(Box)`
  max-width: 482px;
  max-height: 245px;
  align-tems: center;
  justify-content: flex-end;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  .orderPlaced {
    color: ${theme.palette.gammaMedium.main};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    flex: 1;
  }
`;

const FooterBox = styled(Box)`
  min-height: 70px;
  background-color: ${theme.palette.gammaWhite.main};
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.06);
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  .button{
      border-radius: ${theme.spacing(2)};
      border-color: ${theme.palette.interactiveBlue500.main};
      display: flex;
      padding-y: ${theme.spacing(2.75)};
      .hover: {
        background-color: ${theme.palette.gammaWhite.main};
        border-color: ${theme.palette.interactiveBlue500.main};
      }
    }}
  }
`;

const MainContent = () => {
  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        px: {
          xl: '16%',
          lg: '5%',
          md: '2%',
          sm: '0%'
        }
      }}
    >
      <Box
        sx={{
          maxWidth: theme.spacing(315.25),
          maxHeight: theme.spacing(97.75),
          backgroundColor: 'grey',
          display: 'flex',
          pt: '12%'
        }}
      >
        <Box sx={{ flex: '1' }}>
          <Image name="paymentSuccess"></Image>
        </Box>
        <SideBox
          sx={{ width: theme.spacing(120.5), height: theme.spacing(61.25) }}
        >
          <Typography
            variant="subtitle1"
            className="orderPlaced"
            sx={{ paddingTop: theme.spacing(6), pl: theme.spacing(6) }}
          >
            {ORDER_PLACED}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            sx={{ pt: theme.spacing(8), pl: theme.spacing(6) }}
          >
            <Box sx={{ marginTop: theme.spacing(3.2) }}>
              <Icon name="info"></Icon>
            </Box>
            <Typography
              variant="body"
              sx={{
                pl: theme.spacing(1),
                width: '100%',
                color: theme.palette.interactiveBlue800.main
              }}
            >
              {INSTRUCTIONS}
            </Typography>
          </Box>
          <Box>
            <Box sx={{}}>
              <Typography
                sx={{
                  ...theme.typography.caption2,
                  wordBreak: 'break-word',
                  paddingTop: theme.spacing(2),
                  px: theme.spacing(6),
                  color: theme.palette.gammaMedium.main
                }}
              >
                {INSTRUCTION_TEXT}
              </Typography>
            </Box>
          </Box>
        </SideBox>
      </Box>
    </Box>
  );
};

const Footer = () => {
  return (
    <FooterBox>
      <Box sx={{ display: 'flex' }}>
        <NavLink to={'/'} style={{ textDecoration: 'none' }}>
          <Button
            className="button"
            disableElevation
            disableFocusRipple
            disableRipple
            variant="outlined"
            sx={{
              width:'222px',
              backgroundColor: theme.palette.gammaWhite.main,
              color: theme.palette.interactiveBlue500.main,
              marginRight: theme.spacing(3),
              paddingY: theme.spacing(2.85),
            }}
          >
            <Typography>{BACK_TO_HOME}</Typography>
          </Button>
        </NavLink>
      </Box>

      <Box
        sx={{
          display: 'flex',
          pr: {
            xl: theme.spacing(22.5),
            lg: theme.spacing(22.5),
            md: theme.spacing(5),
            sm: theme.spacing(0),
            xs: theme.spacing(0)
          }
        }}
      >
        <NavLink to={'/track-order'} style={{ textDecoration: 'none' }}>
          <Button
            className="button"
            disableElevation
            disableFocusRipple
            disableRipple
            variant="contained"
            sx={{
              width:'222px',
              backgroundColor: theme.palette.interactiveBlue500.main,
              color: theme.palette.gammaWhite.main,
              paddingY: theme.spacing(2.75),
              '&:hover': {
                backgroundColor: theme.palette.interactiveBlue500.main
              }
            }}
          >
            <Typography>{TRACK_YOUR_ORDER}</Typography>
          </Button>
        </NavLink>
      </Box>
    </FooterBox>
  );
};

export const OrderPlacedPage = () => {
  return (
    <FormTemplate footer={<Footer />}>
      <MainContent />
    </FormTemplate>
  );
};
