import React from "react"
import ResponsiveAppBar from "../../Components/header"
import EventCatBtn from "../../Components/EventCatBtn"
import "../EventCategory/UserEventCategory.css"
import "../../Components/EventCatBtn.css"
import Container from '@mui/material/Container';

export default function EventCategory(){

  return(
   <>
    <ResponsiveAppBar/> 
    <img src="banner.png" alt="logo" className="banner"/>
    <EventCatBtn/>
  
      
  </>
  )
}