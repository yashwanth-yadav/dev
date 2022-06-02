import React from 'react';
import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { makeStyles } from "@material-ui/core";
import {Link} from 'react-router-dom';
import { useState } from "react";
import BlinkListLogo from "../../atoms/BlinkListLogo/BlinkListLogo";
import SearchIcon from "../../atoms/SearchIcon/SearchIcon";
import AvatarDropDown from "../../molecules/AvatarDropDown/AvatarDropDown";
import NavDropDown from "../../molecules/NavDropDown/NavDropDown";
import ExploreBox from "../ExploreBox/ExploreBox";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import "./Header.css";
import ArrowDownIcon from "../../atoms/ArrowDownIcon/ArrowDownIcon";
const openMenu = () => {
    let menuClass = document.getElementById("menu-toggle") as HTMLElement
    if(menuClass.style.display === "block")
     menuClass.style.display = "none";
     else{
      menuClass.style.display = "block"
     }
   };
  

  //  const [open, setOpen] = useState(false);onMouseLeave={closeMenu}

const ExtendTabc = styled.div`
   display: none;
   z-index: 1;
   position: absolute;
   top: 10%;
   background:#F1F6F4;
   width: 100%;
   padding: 0 10%;
 `;

 const useStyles = makeStyles((theme) => ({
  exp: {
    display: 'inline',
    color:'#03314B',
    textDecoration:'none',
    "&:hover": {
      color: 'blue'
    },
    
  },
  lnk: {
    paddingBottom: "2px",
    color:'#03314B',
    textDecoration:'none',
    "&:hover": {
      color: 'blue'
    },
  },
  
}))

function Header() {
  const classes = useStyles();

    return (
      <div data-testid="Header-container">
          <nav>
              <ul>
              <li><BlinkListLogo/></li>
              <li><SearchIcon/></li>
              <li onClick={openMenu} className={classes.exp}><NavDropDown text="Explore"/> <ArrowDownIcon h="12" w="12" /></li>
            
              <li>
              <Link to={"/"} className={classes.lnk} >
              <span className="text"> My Library</span>
                    </Link>
                
               </li>
              <li><AvatarDropDown/><ArrowDownIcon h="12" w="12" /></li>
              </ul>
          </nav>
          <ExtendTabc id="menu-toggle">
            <ExploreBox/>
          </ExtendTabc>
      </div>
    );
  }
  
  export default Header;