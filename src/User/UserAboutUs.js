import React from "react"
import ResponsiveAppBar from "../Components/header"
import "../User/UserEventCategory.css"
import "../Components/EventCatBtn.css"
import AboutUs from "../Components/AboutUs"
import Container from '@mui/material/Container';

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
      <AboutUs/>
      <div>
        {Developers.map((developer, index) => (
                    <div
                      key={index}
                      style={{
                        // flex: "0 0 25%",
                        boxSizing: "border-box",
                        padding: ".5rem",
                      }}
                    >
                      <PersonPics
                        image={developer.image}
                        name={developer.name}
                        motto={developer.motto}
                      />
                    </div>
                  ))}
        
      </div>
    </Container>
    
  
      
  </>
  )
}