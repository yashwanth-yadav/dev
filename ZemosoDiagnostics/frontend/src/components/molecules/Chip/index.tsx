import React from 'react';
import { Chip as MuiChip} from '@mui/material';
import theme, { EXTRA_COLORS } from '../../../theme';
import { ChipsProps } from '../../../utils/Types';

/**
 * @author Sai Dharaneesh <saidharaneesh.gurram@zemosolabs.com>
 */

const ChipStyles = {
  '&.MuiButtonBase-root.MuiChip-sizeSmall': {
    height: '32px',
    borderRadius: '16px',
    padding: '6px 12px',
    border: 'none'
  },
  '&.MuiButtonBase-root.MuiChip-sizeMedium': {
    width: '128px',
    height: '40px',
    borderRadius: '12px',
    border: 'none'
  },
  '&.MuiButtonBase-root.MuiChip-sizeLarge': {
    width: '65px',
    height: '76px',
    border: 'none'
  },
  '&.MuiButtonBase-root.MuiChip-sizeExtraLarge': {
    width: '142px',
    height: '40px',
    borderRadius: '12px',
    border: 'none'
  },
  '.MuiChip-deleteIcon': {
    display: 'none'
  },
  '&.MuiChip-outlined': {
    background: `${EXTRA_COLORS.PRIMARY_GREY}`,
    color: 'gammaMedium.main'
  },
  '&.MuiChip-filled': {
    background: `${theme.palette.structuralPurple800.main}`,
    color: 'gammaWhite.main'
  }
};

const Chip = ({ id, onClick, selected, ...props }: ChipsProps) => {
  return (
      <MuiChip
        data-testid={id}
        onClick={onClick}
        variant={selected ? 'filled' : 'outlined'}
        {...props}
        sx={{...ChipStyles}}
      />
  );
};

export default Chip;

