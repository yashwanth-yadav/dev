import React from "react";
import {
   Typography,
 
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core";
import { Grid } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import customStyle from "../../theme";

const useStyles = makeStyles((theme) => ({
  libhead: {
    position: "absolute",
    width: "178px",
    height: "45px",
    left: "264px",
    top: "100px",
    weight: "bold",
    size: "36px",
  },

  gridMain: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D787E",
    paddingTop:'4px',
  },
  gridItem: {
    paddingLeft: "13px",
    color: "#6D787E",
    paddingTop: "4px",

  },
  readTypo: {
   
    paddingLeft: "4px",
    fontFamily: "Cera Pro Black",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "16px",
    lineHeight: "12px",
    color: "#6D787E",
  },
}));

// const theme = createTheme({
//     typography: {

//       htmlFontSize: 13,
//       paddingTop: theme.spacing(1),
//     },
//   });
interface TimeDet {
  time: string;
}
const ReadTime = (props: TimeDet) => {
  // const classes=customStyle();
  const classes = useStyles();
  return (
    <Grid container className={classes.gridMain}>
      <Grid item className={classes.gridItem}>
        <AccessTimeIcon></AccessTimeIcon>
      </Grid>
      <Grid item>
        <Typography variant="caption" className={classes.readTypo}>
          {props.time}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ReadTime;
