import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { ADD_ADDRESS, SELECT_ADDRESS } from '../../../utils/Messages';
import Icon from '../../atoms/Icon';
import { AddressCard } from '../../molecules/AddressCard';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

const MainBox = styled(Box)`
  width: 583px;
  max-height: 560px;
  align-items: center;
  background-color: 'red';
  justify-content: center;
  box-shadow: 0px 0px 26px rgba(233, 232, 237, 0.5);
  border-radius: 8px;
  .cardDetails {
    color: ${theme.palette.gammaMedium.main};
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.005em;
    flex: 1;
  }
`;
interface SelectAddressPropsType {
  addressList: any;
  setSelectAddressList: React.Dispatch<any>;
  setIsInSelectAddressform: React.Dispatch<React.SetStateAction<boolean>>;
}
const SelectAddress = ({
  addressList,
  setIsInSelectAddressform,
  setSelectAddressList
}: SelectAddressPropsType) => {
  const handleSelectedAddress = (index: number) => {
    for (let i = 0; i < addressList.length; i++) {
      if (i == index) {
        addressList[i].isSelected = true;
      } else {
        addressList[i].isSelected = false;
      }
    }
    setSelectAddressList([...addressList]);
  };

  const handleAddAddress = () => {
    setIsInSelectAddressform(false);
  };

  return (
    <MainBox data-testid="select-address">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          paddingX: theme.spacing(6),
          paddingY: theme.spacing(8.125),
          paddingBottom: theme.spacing(4.75)
        }}
      >
        <Typography variant="subtitle1" className="cardDetails">
          {SELECT_ADDRESS}
        </Typography>
        <Box
          display="flex"
          data-testid="add-address"
          onClick={handleAddAddress}
          sx={{
            justifyContent: 'center',
            '&:hover': {
              cursor: 'pointer'
            }
          }}
        >
          <Icon name="add"></Icon>
          <Typography
            variant="body"
            sx={{
              color: theme.palette.interactiveBlue500.main,
            }}
          >
            {ADD_ADDRESS}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{ paddingLeft: theme.spacing(6), paddingBottom: theme.spacing(19) }}
      >
        {addressList.map((value: any, index: number) => {
          return (
            <Box key={index} sx={{ paddingBottom: theme.spacing(4) }}>
              <AddressCard
                addressType={'HOME'}
                address={`${value.houseNo} ${value.area} ${value.zipCode} ${value.city}`}
                isSelected={value.isSelected}
                isVerified={true}
                handleChange={() => {
                  handleSelectedAddress(index);
                }}
              ></AddressCard>
            </Box>
          );
        })}
      </Box>
    </MainBox>
  );
};

export default SelectAddress;
