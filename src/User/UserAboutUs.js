import React from "react"
import ResponsiveAppBar from "../Components/header"
import EventCatBtn from "../Components/EventCatBtn"
// import "../EventCategory/eventCategory.css"
import "../Components/EventCatBtn.css"
import AboutUs from "../Components/AboutUs"
import Container from '@mui/material/Container';

export default function UserAboutUs(){

  return(
   <>
    <ResponsiveAppBar/>
    <img src="./img/aboutus_banner.png" alt="logo" className="banner"/>
    <br/>
    <br/>
    <br/>
    <Container maxWidth="lg">
      <AboutUs/>
    </Container>
    
  
      
  </>
  )
}