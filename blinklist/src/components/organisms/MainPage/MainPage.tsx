import React from 'react';
import Header from "../Header/Header";
import { Grid, makeStyles } from "@material-ui/core";
import MyLibraryHeading from "../../atoms/MyLibraryHeading/MyLibraryHeading";
import Footer from "../Footer/Footer";
import SimpleTabs from "../SimpleTabs/SimpleTabs";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../../molecules/LoginButton/LoginButton";




// import style1 from "styled-components";




const useStyles = makeStyles((theme) => ({
  libhead: {
    position: "absolute",
    width: "178px",
    height: "45px",
    left: "264px",
    top: "100px",
    weight: "bold",
    size: "36px",
    color:'#03314B',
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
  lg: {
    background: "#F1F6F4",
    alignContent:'center',
    borderRadius: "8px",
    alignItems:'center',
    
    padding:'40%',
    paddingTop:'20%'
   
  },
}));

// const MyLibraryHeading=style1.(MyLibraryHeading)`
// `

type BookListProps = {
  details: {
    id:number;
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

function MainPage(props: BookListProps) {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...you could only wait</div>


  const { user, isAuthenticated } = useAuth0();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();

  return (
    isAuthenticated ==true? (  <div className="App">


      
      <Header />

      <div className={classes.libhead}>
        <MyLibraryHeading />
      </div>
    <br></br>
    
      <Grid container>
        <Grid item sm={2} xs={2}></Grid>
        <Grid item sm={8} xs={8}>
        <SimpleTabs details={props.details} setBooks={props.setBooks}/>
         
        </Grid>
        <Grid item sm={2} xs={2}></Grid>
      </Grid>
      <Footer />
      {/* <BookPage/> */}



    </div>
   
  ):<div className={classes.lg}>
      <h2>Please login to continue</h2>
      <LoginButton/>
  </div>
  
  
  )
}

export default MainPage;
