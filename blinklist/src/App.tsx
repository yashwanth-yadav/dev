import React from "react";
import "./App.css";

import {  makeStyles } from "@material-ui/core";

import { useAuth0 } from "@auth0/auth0-react";

import MainPage from "./components/organisms/MainPage/MainPage";


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

function App(props: BookListProps) {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>




  // const classes = useStyles();
  return (
    <div className="App" data-testid="App-tabs">

      
      

      
    <MainPage details={props.details} setBooks={props.setBooks}/>



    </div>
   
  );
}

export default App;
