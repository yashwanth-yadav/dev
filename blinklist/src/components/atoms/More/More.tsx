import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    
    icon: {
        position: "relative",
        left: "80.75%",
    },
  }));

  export const More = () => {
    const classes=useStyles();
  return (
    <IconButton className={classes.icon} role="info">
      <MoreHorizIcon></MoreHorizIcon>
    </IconButton>
  );
};

export default More;