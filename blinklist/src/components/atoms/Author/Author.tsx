import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";

type ATProps = {
    authname:string,
}
const useStyles = makeStyles((theme) => ({
    
    auname: {
        fontStyle: "normal",
             fontSize: "16px",
             fontWeight: 500,
             margin: " 9px 0px 0px 16px",
             color:"#6D787E",
    },
  }));
  export const Author=(props:ATProps) =>{
    const classes=useStyles();
    return (
      <div role="info">
       <Typography variant='body1' className={classes.auname} >
            {props.authname}
        </Typography>  
      </div>
    );
  }
  
  export default Author;






