import React from 'react';
import Header from "../Header/Header";
import {
  Box,
  CardMedia,
  Container,
  Grid,
  
  makeStyles,
  Typography,
} from "@material-ui/core";

import Footer from "../Footer/Footer";
import styled1 from "@emotion/styled";

import { Button } from "@mui/material";
import {  useParams } from "react-router-dom";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import BooksTabs from "../BooksTabs/BooksTabs";
import ReadTime from '../../molecules/ReadTime/ReadTime';

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
  cardStyle: {
    maxWidth: "284px",
    maxHeight: "481px",
    borderRadius: "8px",
  },
  temp: {
    width: "284px",
    height: "15px",
    position: "relative",

    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
  hlnk: {},
  lnk: {},
  bton: {
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(4),
  },
  abton: {
    display: "inline-flex",
    underline: { textDecorationLine: "underline" },
    "&:hover": {
      color: "blue",
    },
    borderBottomColor: "green",
  },
  abton2: {
    display: "inline-flex",
    underline: "always",
  },
  bton2: {
    paddingRight: theme.spacing(9),
    paddingBottom: theme.spacing(1),
    "&:hover": {
      color: "blue",
    },
  },
  arrow: {
    marginLeft: "5px",
  },
  tico: {
    // marginTop:"1px",
  },
  gridMain: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D787E",
  },
  gridItem: {

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
  subHeading: {
    fontFamily: "Cera Pro Black",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "19px",
    lineHeight: "15px",
    marginBottom: "15px",
  },
}));

const ExtendTabc = styled1.div`
/* Get the key ideas from */


width: 168px;
height: 20px;
left: 264px;
top: 146px;

/* Body 2 */
font-family: Cera Pro;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;

/* Text/high_emphasis */
color: #03314B;


 `;

const Head1 = styled1.div`
 /* Beyond Entrepreneurship 2.0 */


 width: 496px;
 height: 45px;
 left: 264px;
 
 
 /* Heading 1 */
 font-family: Cera Pro;
 font-style: normal;
 font-weight: bold;
 font-size: 36px;
 line-height: 45px;
 
 /* Text/high_emphasis */
 color: #03314B;
 
 


 `;

type BookListProps = {
  details: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    prog: number;
    added: boolean;
  }[];
  setBooks: Function;
};

function BookPage(props: BookListProps) {
  const classes = useStyles();

  const { id } = useParams();

  const bookdata: {
    id: number;
    image: string;
    name: string;
    author: string;
    time: string;
    finished: boolean;
    prog: number;
    added: boolean;
  } = props.details.filter((book) => {
    return book.id.toString() === id;
  })[0];

  const [active, setActive] = React.useState(bookdata.finished);

  return (
    <div className="App" data-testid="book-detail-page">
      {/* <Button007  variant={"primary"}>click</Button007> */}
      <Header />

      <Grid container>
        <Grid item xs={1}></Grid>
        <Grid item sm={8} xs={2}>
          {/* content */}
          {/* <ExtendTabc>
            <Typography>Get the key ideas from</Typography>
          </ExtendTabc> */}
          <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} color="#6D787E">
            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                  <Box
                    className={classes.hlnk}
                    id="head1"
                    sx={{
                      fontFamily: 'Cera Pro Black',
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: "24px",
                      lineHeight: "25px",
                      marginBottom: "8px",
                      color: "#03314B",
                      
                    }}
                  >
                    <h3> {bookdata.name}</h3>
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      className={classes.subHeading}
                    >
                      Turning your Business into a Enduring Great Company.
                    </Typography>
                  </Box>{" "}
                  <Grid container className={classes.gridMain}>
      <Grid item className={classes.gridItem}>
        <AccessTimeIcon></AccessTimeIcon>
      </Grid>
      <Grid item>
        <Typography variant="caption" className={classes.readTypo}>
          {bookdata.time}
        </Typography>
      </Grid>
    </Grid>
                  <br />
                  <div className={classes.abton}>
                    <div className={classes.bton}>
                      <Button
                        disabled={active ? false : true}
                        onClick={() => {
                          const tempbooks = [...props.details];
                          tempbooks[bookdata.id].finished = false;
                          props.setBooks(tempbooks);
                          setActive(!active);
                        }}
                        sx={{
                          textTransform: "none",
                          fontSize: "16px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          borderColor: "black",
                          color: "#22C870",
                        }}
                        variant="outlined"
                      >
                        Read now
                      </Button>
                    </div>
                    <div className={classes.bton}>
                      <Button
                        disabled={active ? true : false}
                        onClick={() => {
                          const tempbooks = [...props.details];
                          tempbooks[bookdata.id].finished = true;
                          props.setBooks(tempbooks);
                          setActive(!active);
                        }}
                        
                        sx={{
                          textTransform: "none",
                          fontSize: "16px",
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          backgroundColor: "#2CE080",

                          color: "#03314B",
                          '&:hover': {
                            backgroundColor: '#2CE080',
                            color: '#03314B',
                        },
                          
                        }}
                        variant="contained"
                      >
                        Finish Reading
                      </Button>
                    </div>
                    <Button
                      sx={{
                        textTransform: "none",
                        color: "gray",
                        fontSize: "16px",
                        paddingLeft: "20px",
                        paddingRight: "20px",
                      }}
                      variant="text"
                    >
                      Send to Kindle
                      <ArrowRightAltIcon
                        className={classes.arrow}
                      ></ArrowRightAltIcon>
                    </Button>
                  </div>
                  <BooksTabs/>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box
                    borderBottom={1}
                    className={classes.hlnk}
                    id="head1"
                    sx={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    <CardMedia
                      component="img"
                      height="304px"
                      width="304px"
                      image={bookdata.image}
                      alt="Book"
                    />
                  </Box>
                  <br />

                  <br />
                </Grid>
              </Grid>
            </Container>
            {/* change inside  only */}
          </Box>
        </Grid>
        <Grid item sm={4} xs={2}></Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default BookPage;
