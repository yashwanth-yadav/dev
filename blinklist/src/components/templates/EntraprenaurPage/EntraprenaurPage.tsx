import React from 'react';
import { Grid, Input, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import EntraprenaurExplore from '../../molecules/EntraprenaurExplore/EntraprenaurExplore';
import Footer from '../../organisms/Footer/Footer';
import Header from '../../organisms/Header/Header';
import {  Card, CardMedia, Typography } from "@material-ui/core";
import Author from "../../atoms/Author/Author";
import BookTitle from "../../atoms/BookTitle/BookTitle";
import More from "../../atoms/More/More";
import ReadTime from "../../molecules/ReadTime/ReadTime";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";





const useStyles = makeStyles((theme) => ({
  
  libhead: {
    
   fontWeight:'bold',
    fontSize: "22px",
    paddingTop:"14px",
    
    color:'#534c48',
    textDecoration:'underline'
  },
  cardStyle: {
    maxWidth: "284px",
    maxHeight: "481px",
    borderRadius: "8px",
    alignContent:"left",
  },
  inp:{
    display: 'inline-block',
    paddingTop:'4px',
    paddingBottom:'4px',
    marginTop:'3px',
    marginBottom:'4px',
    color:'black',
    width: '60%',
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

color:"blue",
cursor:"pointer",
},

gri:{
  
},
singlebook:{
  padding:theme.spacing(6),
  alignContent:"left",
},
reading: {
  width: "100%px",
  height: "15px",
  position: "relative",
  background: "#F1F6F4",
  border: "2px solid #E1ECFC",

  borderRadius: "0px 0px 8px 8px",
},
button: {
  width: "100%",
  textTransform: "none",

  color: "#0365F2",
  border: "none",
  "&:hover": {
    backgroundColor: "#0365F2;",
    color: "#FFFFFF",
  },
},

lnk: {
  paddingBottom: "2px",
  color:'#03314B',
  textDecoration: 'none',
  "&:hover": {
   
    textDecoration: 'underline',
  },
},
top:{
  paddingLeft:"84px",
  
},


}));

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

function EntraprenaurPage(props: BookListProps) {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [author, setAuthor] = useState('');
  const books=props.details;
  const setBooks=props.setBooks;
const booksdata=props.details;
  const filteredBooks=booksdata.filter(book=>{
    return book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())||book.author.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  })

  const bookCards = filteredBooks.map((book,index) => (
   
    
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
        <Link to={`/book/${book.id}`} color="inherit"  className={classes.lnk}>
        <BookTitle title={book.name}/>
                    </Link>
        <Author authname={book.author}/>
        <ReadTime time={book.time}/>
       

      


        {book.added ? (
               <div><More/>
                 <Typography className={classes.reading} />
                 
               </div> 
                
              ) : (
                <Button
                  sx={{
                    textTransform: "none",

                    color: "#0365F2",
                    border: "none",
                    
                  }}
                  className={classes.button}
                  variant="text"
                  onClick={() => {
                    const tempbooks=[...props.details];
                    tempbooks[index].added=true;
                    props.setBooks(tempbooks);
                  }}
                >
                  + Add to library
                </Button>
              )}



        <Typography className={classes.temp}
          />
      </Card>
    </Grid>
  ));
  return <div data-testid="EntraprenaurPage-page" >
      
      <Header />

      
    <br></br>
    
      <Grid container>
        <Grid item sm={2} xs={2}></Grid>
        <Grid item sm={8} xs={8} alignContent='center'>
          <div className={classes.top}>
          <EntraprenaurExplore />
         <Input 
        className={classes.inp}
        placeholder='Search by title or author...' onChange={e=>{
           setSearch(e.target.value);
           setAuthor(e.target.value);
        }}
        />
         <Typography className={classes.libhead}>Trending blinks</Typography>
          </div>
       
         <Grid container
    direction="row"
    justifyContent="center"
    alignItems="center">{bookCards}</Grid>

        

        </Grid>
        <Grid item sm={2} xs={2}></Grid>
      </Grid>
      <Footer />
      
  </div>;
}

export default EntraprenaurPage;
