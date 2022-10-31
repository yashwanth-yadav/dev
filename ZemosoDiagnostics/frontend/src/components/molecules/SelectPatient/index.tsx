import { Box, Checkbox, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import Button from '../../atoms/Button';

/**
 * @author Parupudi Chintaiah Yashwanth Yadav <yashwanth.parupudi@zemosolabs.com>
 */

export interface SelectPatientPropsType {
  name: string;
  details: string;
  isChecked?: boolean;
  handleChecked?: () => void;
  handleEdit?: () => void;
}

const SelectPatient = ({
  details,
  name,
  isChecked,
  handleChecked,
  handleEdit
}: SelectPatientPropsType) => {
  return (
    <Box
      data-testid="patient-option"
      sx={{
        width:'100%',
        maxWidth: theme.spacing(133.75),
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        height: theme.spacing(9.5)
      }}
    >
      <Checkbox data-testid={`${name}-checkbox`}
        checked={isChecked}
        onChange={handleChecked}
        disableRipple
        sx={{
          color: theme.palette.grey200.main,
          '&.Mui-checked': {
            color: theme.palette.structuralPurple800.main
          },
          fontSize: theme.spacing(3),
          paddingBottom: theme.spacing(4.35)
        }}
      />
      <Box sx={{ paddingTop: theme.spacing(1) }}>
        <Typography
          sx={{
            paddingLeft: theme.spacing(2.625),
            ...theme.typography.caption,
            fontSize: theme.spacing(3.5),
            lineHeight: '18px',
            color: theme.palette.gammaHigh.main
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            paddingLeft: theme.spacing(2.625),
            ...theme.typography.overline,
            lineHeight: '18px',
            fontSize: theme.spacing(3),

            color: theme.palette.gammaLow.main
          }}
        >
          {details}
        </Typography>
      </Box>

      <Button
        color="inherit"
        onClick={handleEdit}
        sx={{ position: 'absolute', right: theme.spacing(0) }}
      >
        <Typography
          sx={{
            ...theme.typography.caption2,
            color: theme.palette.interactiveBlue500.main,
            fontSize: theme.spacing(3.5)
          }}
        >
          Edit
        </Typography>
      </Button>
    </Box>
  );
};

export default SelectPatient;
