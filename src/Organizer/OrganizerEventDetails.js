import React from 'react';
import ResponsiveAppBar from "../Components/header";
import Footer from "../Components/footer";
import EventRibbon_noBtn from "../Components/EventRibbon_noBtn";
import Container from '@mui/material/Container';
import ButtonM from "../Components/ButtonMaroon";

export default function OrganizerEventDetails(){

    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <ResponsiveAppBar />
            
            <img src="img/EventPageBanner.png" alt="logo" className="banner" />
            <br></br>
            <Container maxWidth="1000px">
                <h3 style={{ fontFamily:'DM Sans, sans-serif', fontSize:'32px', marginRight:'600px', marginLeft:'150px' }}>2023 - Explore, Learn, Innovate!</h3>
                <p style={{ textAlign:'justify', width:'810px', marginRight:'350px', marginLeft:'150px', fontSize:'20px', textDecoration: 'underline' }}>Cebu Institute of Technology</p>
            </Container>
            <br></br>
            <br></br>
            <div>
                <EventRibbon_noBtn />
            </div>
            <br></br>
            <br></br>
            <Container maxWidth="lg">
                <div style={{ textAlign:"center" }}>
                    <h2 style={{ fontFamily:'DM Sans, sans-serif', marginLeft:"-700px" }}>About this event</h2>
                    <p style={{ textAlign:'justify', width:'810px', fontSize:'14px', marginLeft:"60px" }}>
                        Are you ready to embark on a journey of technological discovery? Join us for TechXperience 2023, 
                        a dynamic event that brings together the brightest minds and innovators in the world of technology.
                        Whether you’re a tech enthusiast, a seasoned professional, or just curious about the latest tech trends,
                        this event is designed to empower and inspire.
                    </p>
                </div>
                <br/>
                <br></br>
                {/* ...Other content... */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <img src="img/OrganizerKat.png" alt="OrganizerKat" style={{ marginRight: '150px' }} />
                    <ButtonM name="Contact us" style={{ marginRight: '100px' }} />
                </div>
                <br></br>
                <br></br>     
                {/* ...Other content... */}
            </Container>
            <Footer/>
        </div>
    )
}
