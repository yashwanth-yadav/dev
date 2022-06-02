import React from 'react';
import { Button, Card, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";

import Author from "../../atoms/Author/Author";
import BookTitle from "../../atoms/BookTitle/BookTitle";

import ReadTime from "../../molecules/ReadTime/ReadTime";
import { styled } from '@mui/material/styles';
import { LinearProgress } from '@mui/material';
import {linearProgressClasses} from '@mui/material';

import { Link } from "react-router-dom";

type BookListProps = {
  details: {
    id:number,
    image: string;
    name: string;
    author: string;
    time: string;
    finished:boolean;
    prog:number;
    added:boolean;
  }[];
  setBooks:Function;
};

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
    alignContent:"left",
  },
  temp:{
    width: "284px",
     height: "15px",
     position: "relative",

     background: "#F1F6F4",
     border: "1px solid #E1ECFC",
     boxSizing: "border-box",
     borderRadius: "0px 0px 8px 8px",
},
fin:{
  width:'100%',
color:"blue",
cursor:"pointer",
},

gri:{
  
},
singlebook:{
  padding:theme.spacing(6),
  alignContent:"left",
},
colorPrimary: {
  backgroundColor: '#E1ECFC',
},
barColorPrimary: {
  backgroundColor: '#E1ECFC',
},
lnk: {
  paddingBottom: "2px",
  color:'#03314B',
  textDecoration: 'none',
  "&:hover": {
   
    textDecoration: 'underline',
  },
},

}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#E1ECFC' : '#E1ECFC',
  },
}));

const FinishedBooks=(props: BookListProps)=> {
  const classes = useStyles();
//    const [fin, setFin] = useState(false);
  const bookCards = props.details.map((book,index) => (
    // {data.map((record) => (
    //     record.list.length > 0
    //       ? (<YourRenderComponent record={record} key={record.id} />)
    //       : null
    //   ))}
    book.finished===true?(
    <Grid item className={classes.singlebook}>
        {/* <h1>hlo</h1> */}
      <Card className={classes.cardStyle}>
        <CardMedia
          component="img"
          height="292px"
          width="294.1px"
          image={book.image}
          alt="Book"
        />
        <Link to={`/book/${book.id}`} color="inherit" className={classes.lnk} >
        <BookTitle title={book.name}/>
                    </Link>
        <Author authname={book.author}/>
        <ReadTime time={book.time}/>
        <Button className={classes.fin} onClick={() => {
          const tempbooks=[...props.details];
          tempbooks[index].finished=false;
          props.setBooks(tempbooks);
        }}>Read again </Button>
        
        
        <BorderLinearProgress variant="determinate" value={100} classes={{colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary}} />
      </Card>
    </Grid>):null
  ));

  return (<Grid container
    direction="row"
    justifyContent="center"
    alignItems="center" data-testid="FinishedBooks-page">{bookCards}</Grid>);
};

export default FinishedBooks;
