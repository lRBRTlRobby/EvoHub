import React from "react"
import ResponsiveAppBar from "../Components/header"
import EventCatBtn from "../../Components/EventCatBtn"
import "../EventCategory/UserEventCategory.css"
import "../Components/EventCatBtn.css"
import AboutUs from "../../Components/AboutUs"
import Container from '@mui/material/Container';
import PersonPics from "../../Components/People"

export default function PersonPics(){
const Developers = [
  {
    image : "Profile-3.png",
    name : "Robert Amaba",
    motto : "Go with the flow"

  },
  {
    image : "Profile-3.png",
    name : "Robert Amaba",
    motto : "Go with the flow"

  }, {
    image : "Profile-3.png",
    name : "Robert Amaba",
    motto : "Go with the flow"

  }
  
]
  return(
   <>
    <ResponsiveAppBar/>
    <img src="img/aboutus_banner.png" alt="logo" className="banner"/>
    <br/>
    <br/>
    <br/>
    <Container maxWidth="lg">
      <People/>
      <AboutUs/>
    </Container>
    
  
      
  </>
  )
}