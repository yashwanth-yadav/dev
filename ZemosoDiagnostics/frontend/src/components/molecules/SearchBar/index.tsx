/**
 * @author Sai Kiran Kavali <saikiran.kavali@zemosolabs.com>
 */

import { InputAdornment, InputBase } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import theme from '../../../theme';
import { SEARCH_BAR_PLACEHOLDER } from '../../../utils/Messages';
import Icon from '../../atoms/Icon';

const SearchInput = styled(InputBase)`
  border-radius: ${theme.spacing(2)};
  color: ${theme.palette.gammaHigh.main};
  height: ${theme.spacing(10)};
  border: ${theme.spacing(0.25)} solid ${theme.palette.grey100.main};
  padding: ${theme.spacing(2)} ${theme.spacing(4)};

  &:hover {
    border-color: ${theme.palette.interactiveBlue800.main};
  }

  &.Mui-focused {
    border-color: ${theme.palette.interactiveBlue800.main};
  }
`;

const SearchBar = () => {
  return (
    <SearchInput
      readOnly={true}
      data-testid="search-bar"
      fullWidth
      inputProps={{
        style: {
          fontSize: '16px',
          fontWeight: '400',
          fontFamily: 'Inter',
          lineHeight: '20px'
        }
      }}
      placeholder={SEARCH_BAR_PLACEHOLDER}
      startAdornment={
        <InputAdornment position="start">
          <Icon name="search" />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
