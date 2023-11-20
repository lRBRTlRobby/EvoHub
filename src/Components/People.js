import React from "react"
import ResponsiveAppBar from "../Components/header"
import EventCatBtn from "../Components/EventCatBtn"
import "../Components/EventCatBtn.css"
import AboutUs from "../Components/AboutUs"
import Container from '@mui/material/Container';

export default function PersonPics({image,name,motto}){

  return(
   <>
    <img src={image} alt="logo" className="banner"/>
    <h3>{name}</h3>
    <h4>{motto}</h4>
    
  
      
  </>
  )
}