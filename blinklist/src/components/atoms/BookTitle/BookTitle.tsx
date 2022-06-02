import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";

type BTProps = {
    title:string,
}
const useStyles = makeStyles((theme) => ({
    
    title: {
        fontStyle: "normal",
        fontSize: "18px",
        fontWeight: 700,
        marginLeft:"16px",
        marginTop:"20px",
    },
  }));
  export const BookTitle=(props:BTProps) =>{
    const classes=useStyles();
    return (
      <div role="info">
       <Typography variant='subtitle1' className={classes.title} >
            {props.title}
        </Typography>  
      </div>
    );
  }
  
  export default BookTitle;