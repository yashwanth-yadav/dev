import * as React from 'react';
import Chip from '@mui/material/Chip';
import theme from '../../../theme';
import CloseIcon from '@mui/icons-material/Close';

interface Title {
  title: string;
  handleDelete: () => void;
  color?: string;
}

const ChipRect = (props: Title) => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <Chip
      role="chip"
      label={props.title}
      onClick={handleClick}
      onDelete={props.handleDelete}
      style={{
        background: props.color ? props.color : theme.palette.gammaColor1.main,
        color: theme.palette.betaHigh.main,
        ...theme.typography.caption2,
        borderRadius: '8px',
        margin: 'auto',
        marginLeft: theme.spacing(2)
      }}
      deleteIcon={
        <CloseIcon
          data-testid="close"
          style={{
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            color: theme.palette.betaHigh.main,
            ...theme.typography.caption2
          }}
        />
      }
    />
  );
};

export default ChipRect;
