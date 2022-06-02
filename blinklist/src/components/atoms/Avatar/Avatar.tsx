import React from 'react';
import Avatar1 from '@mui/material/Avatar';
import styled from "@emotion/styled";
import LogoutButton from '../../molecules/LogoutButton/LogoutButton';

const openav = () => {
  let menuClass = document.getElementById("av-toggle") as HTMLElement
  if(menuClass.style.display === "block")
   menuClass.style.display = "none";
   else{
    menuClass.style.display = "block"
   }
 };

const ExtendTabc = styled.div`
   display: none;
   z-index: 1;
   position: absolute;
   top: 100%;
   background:#F1F6F4;
   width: 100%;
   padding: 0 10%;
 `;

export const Avatar=() =>{
    return (
      <div role="info">
        <Avatar1 sx={{ bgcolor: "#69A6E3" }} onClick={openav}>HL</Avatar1>
        <ExtendTabc id="av-toggle">
       
        <LogoutButton/>
          </ExtendTabc>
      </div>
     
    );
}

export default Avatar;