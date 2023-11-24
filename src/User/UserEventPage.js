//UserEventPage.js

import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon from "../Components/EventRibbon";

import "../Components/EventCatBtn.css";
import Container from '@mui/material/Container';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Input, InputLabel, Select, Typography } from "@mui/material";
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import ButtonM from "../Components/ButtonMaroon";


export default function UserEventPage() {
    window.scroll(0, 0);
  

    return(
        <>      
        <ResponsiveAppBar />
              <img src="img/EventPageBanner.png" alt="logo" className="banner" />
              <br></br>
              <Container maxWidth="lg" >
                    <h2 style={{fontFamily:'DM Sans, sans-serif',fontSize:'32px',marginRight:'600px', marginLeft:'150px'}}>
                        TechXperience 2023 - Explore, Learn, Innovate!</h2>

                    <p style={{textAlign:'justify', width:'810px',marginRight:'350px', marginLeft:'150px',fontSize:'20px',textDecoration: 'underline',}}>
                        Cebu Institute of Technology</p>

                    <p style={{textAlign:'justify', width:'810px',marginRight:'350px', marginLeft:'150px',fontSize:'18px'}}>
                        TechXperience 2023 aims to inspire, educate, and connect tech enthusiasts by 
                        providing access to cutting-edge talks, hands-on workshops, and networking 
                        opportunities, both in-person and online. Explore, learn, and innovate with us!</p>
                <br></br>
                <br></br>
                <br></br>
            </Container>
            <EventRibbon path="/UserEventJoinRequest"/>
            <Container maxWidth="lg">
               
                 <br/>
                    <div style={{textAlign:"center"}}>
                        <h2 style={{fontFamily:'DM Sans, sans-serif'}}>About this event</h2>
                        <p style={{textAlign:'center', width:'810px',fontSize:'14px',marginLeft:"150px"}}>
                            Are you ready to embark on a journey of technological discovery? 
                            Join us for TechXperience 2023, a dynamic event that brings 
                            together the brightest minds and innovators in the world of technology. 
                            Whether you’re a tech enthusiast, a seasoned professional, 
                            or just curious about the latest tech trends, this event is 
                            designed to empower and inspire.
                        </p>
                    
                        <br/>
                        <br/>
                        <h2 style={{fontFamily:'DM Sans, sans-serif',width:'200px',textAlign:'center',     marginLeft: '500px'}}>
                            Organizers
                        </h2>
                        <img src="img/Organizers.png" alt="logo" style={{ marginTop: '10px', marginLeft: '100px', width: '1000px', height: '220px' }} />

                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <h2 style={{fontFamily:'DM Sans, sans-serif',width:'200px',textAlign:'center', marginLeft: '500px'}}>
                            Our Sponsors
                        </h2>
                        <img src="img/Sponsors.png" alt="logo" style={{ width: '1000px', height: '350px', marginLeft: '100px' }} />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                {/* <Button sx={{
                backgroundColor: 'maroon', color: 'white', fontFamily: "'DM Sans', sans-serif", width: '19rem', height: '4rem', fontFamily: "'DM Sans', sans-serif", fontSize: '1rem',
                display: "flex", justifyContent: "center", padding: 0, borderRadius: 50 ,
                }}>Contact Us</Button> */}
                <div style={{marginLeft:'450px'}}>
                    <ButtonM name="Contact us" />
                </div>
                

                <br></br>
                <br></br>     
                <br></br>
                <br></br>
                <br></br>
            </Container>
        <Footer />
        </>
    )
}